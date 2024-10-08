import React from 'react';
import { motion } from 'framer-motion';
import res2 from '../Images/res2.jpg';

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: 'easeOut'
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div id="about-section" className="w-full flex flex-col items-center justify-center h-screen bg-gray-900">
      <h2 className="font-bold text-3xl text-white mb-9 ">ABOUT ME</h2>
      <div className="container w-full mx-auto p-4 md:p-6 lg:p-8">
        
        <div className="flex flex-col md:flex-row items-center w-full md:space-x-20 space-y-8 md:space-y-0">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img 
              src={res2} 
              alt="Profile" 
              className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-full object-cover border-8 border-cyan-400" 
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            
            <p className="mt-4 text-lg text-gray-300">
              Hello! I'm Ketham Sanjay, a passionate and dedicated Full Stack Developer with a strong background in building dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I strive to create seamless user experiences and efficient, scalable systems.
            </p>
            <a href='#resume-section'>
              <button className='bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xl px-6 py-2 rounded mt-6'>
                Resume
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
