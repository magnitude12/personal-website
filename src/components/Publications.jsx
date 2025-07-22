import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { publications } from "../constants";

const PublicationCard = ({
  index,
  title,
  journal,
  year,
  authors,
  abstract,
  doi,
  status,
  tags,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[400px] sm:w-[420px] w-full flex flex-col h-[500px]'
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
        </div>
      </div>

      <div className='flex-1 mb-4 min-h-0'>
        <p className='text-white tracking-wider text-[14px] line-clamp-6'>
          {abstract}
        </p>
      </div>

      <div className='h-[60px] mb-4 overflow-hidden'>
        <div className='flex flex-wrap gap-1'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='bg-tertiary px-2 py-1 rounded text-[10px] text-secondary'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {doi && (
        <div className='h-[20px] flex items-center'>
          <p className='text-secondary text-[12px]'>
            DOI: <a 
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className='blue-text-gradient hover:text-white transition-colors duration-200 cursor-pointer'
            >
              {doi}
            </a>
          </p>
        </div>
      )}
    </div>
  </motion.div>
);

const Publications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My research contributions</p>
          <h2 className={styles.sectionHeadText}>Publications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {publications.map((publication, index) => (
          <PublicationCard key={publication.title} index={index} {...publication} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Publications, "publications");
