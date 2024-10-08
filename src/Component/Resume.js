import React from 'react';

const Resume = () => {
  const resume = `${process.env.PUBLIC_URL}/resume.pdf`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <div id='resume-section' className='bg-black flex flex-col items-center justify-center min-h-screen p-4'>
      <button 
        onClick={handleDownload} 
        className='bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl px-6 py-3 mt-14 rounded'
      >
        Download CV
      </button>
      <div className='w-full max-w-4xl mt-9'>
        <iframe
          src={resume}
          className='w-full h-screen'
          title='Resume'
        />
      </div>
    </div>
  );
};

export default Resume;
