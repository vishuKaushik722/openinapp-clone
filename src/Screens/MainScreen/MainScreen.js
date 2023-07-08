import React, { useEffect } from 'react';
import './MainScreen.css';
import Navbar from '../../Components/Navbar/Navbar';
import Section from '../../Components/Section/Section';

const MainScreen = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      if (currentSection) {
        const currentSectionId = currentSection.getAttribute('id');
        console.log('Current section:', currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='mainscreen-container'>
      <Navbar />
      <Section
        id="section1"
        image={<img src="image1.jpg" alt="Image 1" />}
        text="Text for Section 1"
        position="left"
      />
      <Section
        id="section2"
        image={<img src="image2.jpg" alt="Image 2" />}
        text="Text for Section 2"
        position="right"
      />
      <Section
        id="section1"
        image={<img src="image1.jpg" alt="Image 1" />}
        text="Text for Section 1"
        position="left"
      />
      <Section
        id="section2"
        image={<img src="image2.jpg" alt="Image 2" />}
        text="Text for Section 2"
        position="right"
      />
      <Section
        id="section1"
        image={<img src="image1.jpg" alt="Image 1" />}
        text="Text for Section 1"
        position="left"
      />
      <Section
        id="section2"
        image={<img src="image2.jpg" alt="Image 2" />}
        text="Text for Section 2"
        position="right"
      />
    </div>
  );
};

export default MainScreen;