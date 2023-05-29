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
  compost,
  creator,
  cansat,
  tan,
  garden,
  weatherstation,
  kist,
  saral,
  autobot,
  predict,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Profile",
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
    title: "Student, HS",
    company_name: "KIST",
    icon: kist,
    iconBg: "#383E56",
    date: "2020-2022",
    points: [
      "Completed HS under NEB curriculum with Computer Science",
      "President of Sci-Tech Club, managed multiple events",
      "Organized and held multiple olympiads",
      "Built robotic projects for multiple Fairs/Hackathons",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Saral Shikshya",
    icon: saral,
    iconBg: "#383E56",
    date: "2021-2022",
    points: [
      "Interned at Saral Shikshya, developed and maintainied website.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and webinars",
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

const testimonials = [
  {
    testimonial:
      "Nulla nisi nulla aliqua commodo labore veniam cupidatat occaecat.",
    name: "Lorem Ipsum",
    designation: "Lorem",
    company: "Lorem",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nulla nisi nulla aliqua commodo labore veniam cupidatat occaecat.",
    name: "Lorem Ipsum",
    designation: "Lorem",
    company: "Lorem",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nulla nisi nulla aliqua commodo labore veniam cupidatat occaecat.",
    name: "Lorem Ipsum",
    designation: "Lorem",
    company: "Lorem",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
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

export { services, technologies, experiences, testimonials, projects };
