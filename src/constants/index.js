import {
  mobile,
  backend,
  web,
  javascript,
  ku,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  fire,
  docker,
  threejs,
  python,
  portfolio,
  bash,
  c,
  coas,
  nasa,
  compost,
  creator,
  cansat,
  tan,
  garden,
  weatherstation,
  autobot,
  predict,
  TU,
  recham,
  msu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Programmer",
    icon: web,
  },
  {
    title: "Robotics Enthusiast",
    icon: mobile,
  },
  {
    title: "AI/Automation",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bash",
    icon: bash,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Firebase",
    icon: fire,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Undergraduate Researcher",
    company_name: "Department of Geosciences, Mississippi State University",
    icon: msu,
    iconBg: "#383E56",
    date: "2024-Present",
    points: [
      "Researching effects of custom LULC datasets on long term climate projections of Numerical Weather Prediction Models",
      "Configured WRF models to determine optimal climate projection hyperparameters for the Mississippi delta region",
      "Training fine tuned ML models to classify high resolution satellite imagery for climate modeling"
    ],
  },
  {
    title: "Research Internship",
    company_name: "Tribhuvan University",
    icon: TU,
    iconBg: "#383E56",
    date: "2022-2024",
    points: [
      "Researched and developed Nepal’s most accurate AI model for wildfire vulnerability assessment under a national research priority project",
      "Built a live portal to visualize current conditions and predictions of fire and drought throughout Nepal",
      "Configured server for Numerical Weather Prediction and used WRF to conduct weather simulations to study climate induced extreme disaster events inside Nepal.",
    ],
  },{
    title: "Software Developer",
    company_name: "RECHAM Consult",
    icon: recham,
    iconBg: "#383E56",
    date: "2021-2024",
    points: [
      "Developed various AI models to predict and analyze pollution patterns in Kathmandu Valley",
      "Used satellite imagery near to high pollution events inside Nepal to analyze correlation to visibility at Nepal’s major airports.",
      "Designed and developed a ESP based device to measure recharge rate of wells/aquifiers."
    ],
  },
    {
    title: "Global Finalist",
    company_name: "NASA INTERNATIONAL SPACEAPPS CHALLENGE 2023",
    icon: nasa,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Nominated as global nominee from Nepal.",
      "Selected as Top 40 as global finalists among 58,000 participants from 152 countries worldwide",
    ],
  },
  {
    title: "National Winner",
    company_name: "KU Aviskar National Hardware Hackathon",
    icon: ku,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Participated in Aviskar 2023, Kathmandu University",
      "Competed under hardware hackathon category",
      "Awarded as the national winner",
    ],
  },
  {
    title: "National Winner",
    company_name: "COAS GRAND NATIONALS 2023",
    icon: coas,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Participated in the Chief of Army Staff Science event by Nepal's military",
      "Prepared project under AI/ML innovation",
      "Awarded the national winner",
      "Distinguished with the star scientist merit by Nepal Army's Cheif of Staff.",
    ],
  },
  {
    title: "Founder/Mentor",
    company_name: "Tech Access Nepal",
    icon: tan,
    iconBg: "#383E56",
    date: "2021-Present",
    points: [
      "Founded a non-profit to help underpriviledged children in Nepal with robotics.",
      "Currently at 6 districts with 1600+ total students.",
      "Organized and managed multiple robotics bootcamps.",
      "Coded, designed circuits and built 17+ Arduino/IOT projects till date",
    ],
  },

];

const publications = [
  {
    title: "Advancing wildfire prediction in Nepal using machine learning algorithms",
    journal: "Environment Research Communications",
    year: "2025",
    authors: "Sapkota S, Joshi K.P.P, Kuikel S, Kuinkel D, Bhandari B, Wu Y, Bing H, Marahatta S, Aryal D, Wang S-YS",
    abstract: "Wildfires are increasingly threatening Nepal, particularly during the dry pre-monsoon months (March-May), leading to severe ecological impacts and disruptions to local communities. To improve wildfire prediction and preparedness, this study evaluated four advanced machine learning algorithms—Random Forest, Radial Basis Function Neural Network, Artificial Neural Network, and Support Vector Machine—using comprehensive dataset (2001–2023) of meteorological, topographical, anthropogenic, locational, and vegetation variables. The Random Forest (RF) model outperformed others, achieving the highest accuracy (88.6%) and predictive reliability (AUC: 0.96). Notably, vapor pressure deficit emerged as the strongest predictor, contrasting previous studies where precipitation was often considered dominant. Utilizing the robust RF model, a high resolution (1-km) wildfire risk map identified 11.1% of Nepal, encompassing 12 districts and 48 municipalities primarily in the southwestern region, as very high-risk areas. By integrating daily meteorological data into wildfire predictions, this research provides an innovative framework that enhances risk management strategies, offering actionable insights for decision-makers and supporting resilience-building efforts in fire prone regions.",
    doi: "10.1088/2515-7620/add2db",
    status: "Published",
    tags: ["Wildfires", "Fire Prediction", "Risk Mapping", "Machine Learning"]
  },
  {
    title: "Impact of wildfire smoke on air pollution-related premature mortality in rapidly growing Kathmandu Valley",
    journal: "Atmospheric Environment: X",
    year: "2025",
    authors: "S Kuikel, H Paudel, D Kuinkel, K Joshi, S Sapkota, N Malakar, S-Y S Wang, B Pokharel",
    abstract: "The dangers of urban population growth in highly polluted regions are starkly illustrated by the Kathmandu Valley, where nearly half of the days each year exceed the national PM2.5 air quality guideline of 40 μg/m3. Wildfire smoke, particularly during the pre-monsoon season, is a major contributor to air quality degradation. Using diverse datasets, including in-situ observations, satellite data, and machine learning classification, we identified 311 wildfire smoke days between 2003 and 2023, with smoke events contributing significantly to the valley's persistent poor air quality. While PM2.5 concentrations showed no significant trend over the study period, premature adult deaths rose dramatically from 1000 in 2004 to 12,600 in 2021. The exponential increase in mortality was largely influenced by rapid population growth from 0.52 million to 4.1 million adults in the valley, rather than solely by worsening air quality. The stable but consistently poor air quality became lethal at a larger scale simply because more people were exposed, with wildfire smoke alone contributing to an average of 70 adult deaths annually. Despite the mortality rate per 100,000 people showing only modest increases, the sheer growth in the exposed population has transformed a persistent air quality problem into a major public health crisis. Our findings demonstrate how population growth in regions with chronically poor air quality can dramatically amplify public health impacts even without air quality deterioration, emphasizing the urgent need for air quality management in rapidly urbanizing regions.",
    doi: "10.1016/j.aeaoa.2025.100334",
    status: "Published",
    tags: ["Air pollution", "Wildfire Smoke", "Population growth", "Disaster Management"]
  },
  {
    title: "Sensitivity of Regional Hydroclimate Simulations to Land Use and Land Cover Changes​",
    journal: "Undergraduate Research Symposium",
    year: "2025",
    authors: "S Sapkota, B Fosu, Y-H Lin, J Dyer, S Ambinakudige",
    abstract: "Land use and land cover (LULC) changes significantly influence climate change. Despite their importance, LULC-induced climate feedback remains a major source of uncertainty in climate projection. This study investigates how LULC datasets influence simulated climate dynamics by conducting high-resolution simulations over the United States, downscaled to the Mississippi Delta region. The study utilizes a range of configurations over different LULC datasets to assess how variations influence key climate variables.",
    doi: "‎ ",
    status: "Poster",
    tags: [ "Numerical Weather Prediction","Climate Modelling", "LULC", "Regional Simulations"]
  },
];

const projects = [
  {
    name: "CanSat",
    description:
      "A working model of a Can Satellite, capable of transmitting multiple metrics",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "RF",
        color: "green-text-gradient",
      },
      {
        name: "Esp",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: cansat,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fire Prediction System",
    description:
      "An AI model that predicts fire hotspots;nodes to relay live data and compute a risk value",
    tags: [
      {
        name: "AI/ML",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Esp",
        color: "pink-text-gradient",
      },
    ],
    image: predict,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Compost",
    description:
      "A AI powered home composting system that turns wastes into compost while learning",
    tags: [
      {
        name: "AI/ML",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Esp",
        color: "pink-text-gradient",
      },
      {
        name: "html/css",
        color: "green-text-gradient",
      },
    ],
    image: compost,
    source_code_link: "https://github.com/",
  },
  {
    name: "Driverless Car",
    description:
      "A model car capable of avoiding obstacles, following lanes, maps and remote control",
    tags: [
      {
        name: "Esp/Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "IOT",
        color: "pink-text-gradient",
      },
    ],
    image: autobot,
    source_code_link: "https://github.com/",
  },  {
    name: "Automatic Irrigator",
    description:
      "An automatic irrigation system that waters plants based on sensor readings",
    tags: [
      {
        name: "Esp/Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "IOT",
        color: "pink-text-gradient",
      },
    ],
    image: garden,
    source_code_link: "https://github.com/",
  },
  {
    name: "Remote Weather Station",
    description:
      "A weather station that relays remote weather data to the central server wirelessly.",
    tags: [
      {
        name: "Esp/Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "RF",
        color: "green-text-gradient",
      },

    ],
    image: weatherstation,
    source_code_link: "https://github.com/magnitude12/Weather-StationESP",
  },
  {
    name: "Portfolio",
    description:
      "A 3d web portfolio I built for myself, you are here right now.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "3js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },

    ],
    image: portfolio,
    source_code_link: "https://github.com/magnitude12/personal-website",
  },
];

export { services, technologies, experiences, publications, projects };
