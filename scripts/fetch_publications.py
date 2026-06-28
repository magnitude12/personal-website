"""
fetch_publications.py

Fetches publications from Google Scholar, trims fields, merges with hardcoded
entries (posters etc.), and writes trimmed data to public/publications.json.
"""

import json
import os
import re
import sys
import time
from pathlib import Path


try:
    from scholarly import scholarly, ProxyGenerator
except ImportError:
    print("Error: 'scholarly' not installed. Run: pip install scholarly")
    sys.exit(1)


TITLE_WORD_LIMIT = 15
ABSTRACT_WORD_LIMIT = 40

HARDCODED = [
    {
        "title": "Sensitivity of Regional Hydroclimate Simulations to Land Use and Land Cover Changes",
        "journal": "Undergraduate Research Symposium",
        "year": "2025",
        "authors": "Saugat Sapkota, Boniface Fosu, Yen Lin, Jamie Dyer, Shrinidhi Ambinakudige",
        "abstract": "Land use and land cover (LULC) changes significantly influence climate change. Despite their importance, LULC-induced climate feedback remains a major source of uncertainty in climate projection. This study investigates how LULC datasets influence simulated climate",
        "url": "",
        "status": "Poster",
        "tags": [
            "Numerical Weather Prediction",
            "Climate Modelling",
            "LULC",
            "Regional Simulations",
        ],
        "citationCount": None,
    },
]


def trim_title(title: str) -> str:
    words = title.split()
    if len(words) <= TITLE_WORD_LIMIT:
        return title
    return " ".join(words[:TITLE_WORD_LIMIT]) + "..."


def trim_abstract(abstract: str) -> str:
    if not abstract:
        return ""
    words = abstract.split()
    if len(words) <= ABSTRACT_WORD_LIMIT:
        return abstract
    return " ".join(words[:ABSTRACT_WORD_LIMIT]) + "..."


def format_author(name: str) -> str:
    name = name.strip()
    if not name:
        return name
    if "," in name:
        parts = [p.strip() for p in name.split(",", 1)]
        last = parts[0]
        first_parts = parts[1].split() if len(parts) > 1 else []
        first = first_parts[0] if first_parts else ""
        return f"{first} {last[0]}." if first else last
    else:
        parts = name.split()
        if len(parts) == 1:
            return parts[0]
        return f"{parts[0]} {parts[-1][0]}."


def format_authors(raw: str) -> str:
    if not raw:
        return ""
    names = re.split(r"\s+and\s+|;\s*", raw)
    if len(names) == 1:
        parts = [p.strip() for p in raw.split(",") if p.strip()]
        if len(parts) == 2 and all(len(p.split()) == 1 for p in parts):
            return format_author(raw)
        names = parts
    formatted = [format_author(n.strip()) for n in names if n.strip()]
    return ", ".join(formatted)


def infer_status(journal: str, year) -> str:
    j = (journal or "").lower()
    if "arxiv" in j or "preprint" in j:
        return "Preprint"
    if "review" in j:
        return "Under Review"
    return "Published"


def setup_proxy():
    scraper_key = os.environ.get("SCRAPER_API_KEY", "")
    if not scraper_key:
        print("No SCRAPER_API_KEY set — attempting direct connection")
        return

    proxy_url = f"http://scraperapi:{scraper_key}@proxy-server.scraperapi.com:8001"
    try:
        pg = ProxyGenerator()
        pg.SingleProxy(http=proxy_url, https=proxy_url)
        scholarly.use_proxy(pg)
        print("Using ScraperAPI proxy")
    except Exception as e:
        print(f"Proxy setup failed: {e} — attempting direct connection")


def fetch_scholar(user_id: str) -> list:
    print(f"Fetching Scholar profile for user: {user_id}")
    setup_proxy()

    for attempt in range(1, 4):
        try:
            author = scholarly.search_author_id(user_id)
            author = scholarly.fill(author, sections=["publications"])
            break
        except Exception as e:
            print(f"Attempt {attempt} failed: {e}")
            if attempt < 3:
                time.sleep(5 * attempt)
    else:
        print("Warning: All attempts to reach Google Scholar failed.")
        return []

    results = []
    for pub in author.get("publications", []):
        try:
            filled = scholarly.fill(pub)
        except Exception:
            filled = pub

        bib = filled.get("bib", {})
        title = bib.get("title", "Untitled")
        journal = bib.get("journal") or bib.get("venue") or bib.get("booktitle") or ""
        year = str(bib.get("pub_year") or bib.get("year") or "")
        authors_raw = bib.get("author", "")
        abstract_raw = bib.get("abstract", "")
        url = filled.get("pub_url") or filled.get("eprint_url") or ""

        entry = {
            "title": trim_title(title),
            "journal": journal,
            "year": year,
            "authors": format_authors(authors_raw),
            "abstract": trim_abstract(abstract_raw),
            "url": url,
            "status": infer_status(journal, year),
            "tags": [],
            "citationCount": filled.get("num_citations"),
        }
        results.append(entry)
        print(f"  added: {title[:60]}{'...' if len(title) > 60 else ''} ({year})")

    return results


def merge(scholar_pubs: list, hardcoded: list) -> list:
    scholar_titles = {p["title"].lower().strip() for p in scholar_pubs}
    extra = [
        p for p in hardcoded
        if p["title"].lower().strip() not in scholar_titles
    ]
    for p in extra:
        p["title"] = trim_title(p["title"])
        p["abstract"] = trim_abstract(p.get("abstract", ""))
        p["authors"] = format_authors(p.get("authors", ""))

    with_abstract = sorted(
        [p for p in scholar_pubs if p.get("abstract")],
        key=lambda p: p.get("year") or "0", reverse=True
    )
    without_abstract = sorted(
        [p for p in scholar_pubs if not p.get("abstract")],
        key=lambda p: p.get("year") or "0", reverse=True
    )
    combined = with_abstract + extra + without_abstract
    return combined


def main():
    user_id = os.environ.get("SCHOLAR_USER_ID", "").strip()
    if not user_id:
        print("Error: SCHOLAR_USER_ID environment variable is not set.")
        sys.exit(1)

    scholar_pubs = fetch_scholar(user_id)
    if not scholar_pubs:
        print("No Scholar results — using hardcoded entries only.")

    all_pubs = merge(scholar_pubs, HARDCODED)

    out_path = Path(__file__).parent.parent / "public" / "publications.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(all_pubs, indent=2, ensure_ascii=False))
    print(f"\nWrote {len(all_pubs)} publications to {out_path}")


if __name__ == "__main__":
    main()