import React, { useState, useEffect } from 'react';
import Loader from './Component/Loading'; // Import your Loader component
import Header from './Component/Header';
import About from './Component/About';
import Title from './Component/Title';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Resume from './Component/Resume';
import Experience from './Component/Experience';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Title />
          <About />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
