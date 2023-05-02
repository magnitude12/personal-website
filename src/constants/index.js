import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  bash,
  c,
  tan,
  kist,
  saral,
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
    name: "figma",
    icon: figma,
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
    title: "Founder/Mentor",
    company_name: "Tech Access Nepal",
    icon: tan,
    iconBg: "#383E56",
    date: "2021-Present",
    points: [
      "Founded a non-profit to help underpriviledged children in Nepal with robotics.",
      "Currently at 6 districs with 1600+ total students.",
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
    name: "Lorem",
    description:
      "Nulla nisi nulla aliqua commodo labore veniam cupidatat occaecat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem",
    description:
      "Nulla nisi nulla aliqua commodo labore veniam cupidatat occaecat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem",
    description:
      "Nulla nisi nulla aliqua commodo labore veniam cupidatat occaecat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
