import React from 'react';
import './MainScreen.css';
import Navbar from '../../Components/Navbar/Navbar';
import Section from '../../Components/Section/Section';
import Footer from '../../Components/Footer/Footer';

const MainScreen = () => {


  return (
    <div className='mainscreen-container'>
      <Navbar />
      <div>
      <Section
        id="section1"
        imageid={0}
        heading="Welcome to"
        text="OpeninApp"
        position="left"
      />
      <Section
        id="section2"
        imageid={1}
        heading="A Super Tool"
        text="For Creators"
        position="right"
      />
      <Section
        id="section1"
        imageid={2}
        heading="That Helps You"
        text="Grow On"
        position="left"
      />
      <Section
        id="section2"
        imageid={3}
        heading="Get Better"
        text="Brand Deals"
        position="right"
      />
      <Section
        id="section1"
        imageid={4}
        seacondhed={true}
        heading="290k+"
        text="Creators"
        position="left"
      />
      <Section
        id="section2"
        imageid={5}
        heading="Ready to"
        text="Get Started?"
        position="right"
      />
      <Footer />
      </div>
    </div>
  );
};

export default MainScreen;