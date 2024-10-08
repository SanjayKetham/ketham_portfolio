import React from 'react';
import Java from '../Images/java.png';
import ReactJS from '../Images/reactjs.png';
import Javascript from '../Images/java-script.png';
import Nodejs from '../Images/nodejs.png';
import Redux from '../Images/redux.png';
import Mysql from '../Images/Graphql.png';
import Git from '../Images/git.png';
import Python from '../Images/python.png';

const Experience = () => {
  return (
    <div id='experience-section' className='bg-darkblue-900 py-10 md:py-20 overflow-visible'>
      <h2 className='text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-10'>Technical Skills</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Java} alt="Java" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div>
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={ReactJS} alt="ReactJS" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div>
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Javascript} alt="Javascript" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200 js-icon' />
        </div>
        {/* Uncomment and add MongoDB image if needed */}
        {/* <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Mongodb} alt="Mongodb" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div> */}
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Nodejs} alt="Nodejs" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div>
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Redux} alt="Redux" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div>
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Mysql} alt="Graphql" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div>
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Git} alt="Git" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div>
        <div className='p-4 md:p-10 flex justify-center items-center'>
          <img src={Python} alt="Python" className='w-16 h-16 md:w-20 md:h-20 m-1 md:m-2 hover:scale-110 transition-transform duration-200' />
        </div>
      </div>
    </div>
  );
};

export default Experience;
