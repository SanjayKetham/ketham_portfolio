import React, { useState, useEffect } from 'react';
import flipkart from '../Images/flipkart.png';
import sliceofspice from '../Images/sliceofspice.png';
import resort from '../Images/resort.png';
import { IoLogoGithub } from 'react-icons/io5';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; 

const projects = [
  {
    id: 1,
    title: 'Flipkart Clone',
    description: `This project is a comprehensive clone of Flipkart's e-commerce platform, meticulously crafted using React.js and Tailwind CSS. It demonstrates a modern, responsive design tailored to enhance user experience across various devices. Key features include real-time product filtering, seamless user authentication and management through Firebase, and a dynamic shopping cart system. The project exemplifies industry best practices in web development and offers a robust foundation for scalable and maintainable code.`,
    image: flipkart,
    github: 'https://github.com/SanjayKetham/flipkart_clone',
    demo: 'https://sanjayketham.github.io/flipkart_clone/',
  },
  {
    id: 2,
    title: 'Slice of Spice',
    description: `This project is a unique culinary experience platform named "Slice of Spice." Crafted using modern web technologies, it provides users with recipes, cooking tips, and interactive features. The design focuses on creating an engaging and easy-to-navigate interface, allowing users to explore a variety of dishes and share their culinary experiences. Key features include recipe search, user-generated content, and a dynamic blog section.`,
    image: sliceofspice,
    github: 'https://github.com/SanjayKetham/slice-of-spice',
    demo: 'https://sanjayketham.github.io/slice-of-spice/',
  },
  {
    id: 3,
    title: 'Resort Booking System',
    description: `This project is a Resort Booking System designed to streamline the booking process for users and administrators. It features a user-friendly interface where users can search for available resorts, check availability, and make bookings. Admins can manage reservations, update resort information, and track booking statistics. Developed with a focus on scalability and maintainability, this system showcases advanced features such as real-time availability updates and comprehensive reporting.`,
    image: resort,
    github: 'https://github.com/SanjayKetham/Luxe-Vista-Resort',
    demo: 'https://sanjayketham.github.io/Luxe-Vista-Resort',
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Effect to change project automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change project every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const { title, description, image, github, demo } = projects[currentProjectIndex];

  return (
    <div id='project-section' className='bg-black py-20'>
      <h1 className='text-3xl font-bold text-center text-white mt-10'>PROJECTS</h1>
      <div className='flex items-center justify-center mt-16'>
        <button onClick={handlePrev} className='text-white text-2xl mx-4 shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <AiOutlineLeft />
        </button>

        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='flex-1 px-10 text-center md:text-left'>
            <p className='font-semibold text-2xl ml-8 text-white mt-6'>{title}</p>
            <p className={`mt-4 text-lg text-white`}>
              {description}
            </p>
            <div className='mt-4'>
              <a
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 text-white px-4 py-2 rounded mr-2 inline-flex items-center'
              >
                <IoLogoGithub className='mr-2' /> GitHub
              </a>
              <a
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded ml-2 inline-block'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='flex-shrink-0 mt-10 md:mt-0 md:ml-10'>
            <img src={image} alt={title} className='border-4 border-cyan-400 rounded-md' style={{ width: '600px', height: 'auto' }} />
          </div>
        </div>

        <button onClick={handleNext} className='text-white text-2xl mx-4 shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Projects;
