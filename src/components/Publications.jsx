import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FALLBACK = [
  {
    title: "Publication title",
    journal: "Placeholder",
    year: "2025",
    authors: "Authors",
    abstract: "abcd",
    url: "",
    status: "Poster",
    tags: ["error", "Climate Modelling", "LULC", "Regional Simulations"],
    citationCount: null,
  },
];

const PublicationCard = ({ index, title, journal, year, authors, abstract, url, status, tags, citationCount }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl min-[450px]:w-[400px] sm:w-[420px] w-full flex flex-col h-[500px]'
  >
    <div className='flex flex-col h-full'>
      <div className='h-[80px] mb-4 flex items-start'>
        <h3 className='text-white font-bold text-[20px] leading-tight line-clamp-3'>
          {title}
        </h3>
      </div>
 
      <div className='h-[100px] mb-4 flex flex-col justify-between'>
        <div>
          <p className='text-secondary text-[14px] mb-1'>
            <span className='text-white font-medium'>{journal}</span> • {year}
          </p>
          <p className='text-secondary text-[12px] mb-2 line-clamp-2'>{authors}</p>
        </div>
        <div className='flex items-center gap-2'>
          <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${
            status === 'Published' ? 'bg-green-600 text-white' :
            status === 'Under Review' ? 'bg-yellow-600 text-white' :
            status === 'Poster' ? 'bg-purple-600 text-white' :
            'bg-blue-600 text-white'
          }`}>
            {status}
          </span>
          {citationCount != null && citationCount > 0 && (
            <span className='text-[10px] text-secondary'>
              {citationCount} citation{citationCount !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>
 
      <div className='flex-1 mb-4 min-h-0'>
        <p className='text-white tracking-wider text-[14px] line-clamp-6'>
          {abstract}
        </p>
      </div>
 
      <div className='h-[60px] mb-4 overflow-hidden'>
        <div className='flex flex-wrap gap-1'>
          {tags?.map((tag) => (
            <span key={tag} className='bg-tertiary px-2 py-1 rounded text-[10px] text-secondary'>
              {tag}
            </span>
          ))}
        </div>
      </div>
 
      {url && url.trim() && (
        <div className='h-[20px] flex items-center'>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className='blue-text-gradient text-[12px] hover:opacity-80 transition-opacity duration-200 cursor-pointer'
          >
            {url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")}
          </a>
        </div>
      )}
    </div>
  </motion.div>
);
 
const Publications = () => {
  const [publications, setPublications] = useState(FALLBACK);
 
  useEffect(() => {
    fetch("/publications.json")
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setPublications(data);
      })
      .catch(() => {}); // silently keep FALLBACK
  }, []);
 
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My research contributions</p>
          <h2 className={styles.sectionHeadText}>Publications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {publications.map((pub, index) => (
          <PublicationCard key={pub.title + index} index={index} {...pub} />
        ))}
      </div>
    </div>
  );
};
 
export default SectionWrapper(Publications, "publications");