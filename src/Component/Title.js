import React from 'react';
import { motion } from 'framer-motion';
import web from '../Images/web.png';

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.2
    }
  }
};

const Title = () => {
  const handleHireMeClick = () => {
    window.location.href = 'mailto:kethamsanjay.com?subject=Inquiry&body=Hello Ketham,';
  };

  return (
    <div className="mt-40 flex items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="text-4xl md:text-6xl lg:text-8xl font-bold space-y-4"
      >
        <motion.p variants={titleVariants} className="text-gray-500 ml-10">I'm a</motion.p>
        <motion.p variants={titleVariants} className='ml-16'>FULL STACK</motion.p>
        {/* <motion.p variants={titleVariants}>SOFTWARE</motion.p> */}
        <motion.p variants={titleVariants} className='ml-16'>DEVELOPER</motion.p>
        <button
          onClick={handleHireMeClick}
          className='bg-gradient-to-r from-purple-500 to-blue-500 text-white text-3xl px-10 py-2 rounded mt-4 ml-16'
        >
          Hire Me
        </button>
      </motion.div>
      <div className="ml-72">
        <img src={web} alt="Web development illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Title;
