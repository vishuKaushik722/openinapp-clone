import React from 'react';
import "./Section.css"

const videoArr = [
  "https://storage.googleapis.com/openinapp-prod-assets/openinapp%20new%20assets/Welcome%20to%20OpeninApp_1.mp4",
  "https://storage.googleapis.com/openinapp-prod-assets/openinapp%20new%20assets/A%20Growth%20Tool%20for%20Creators_1.mp4",
  "https://storage.googleapis.com/openinapp-prod-assets/openinapp%20new%20assets/That%20help%20grow%20on_1.mp4",
  "https://storage.googleapis.com/openinapp-prod-assets/openinapp%20new%20assets/And%20get%20better%20brand%20deals_1.mp4",
  "https://storage.googleapis.com/openinapp-prod-assets/openinapp%20new%20assets/Creator%20Scroll%20Avatar%20Updated%20%5BMP4%5D_2.mp4",
  "https://storage.googleapis.com/openinapp-prod-assets/openinapp%20new%20assets/Ready%20to%20get%20onboard_1.mp4"
];

const Section = ({ imageid, heading, text, position, seacondhed }) => {


  return (
    <div className="section">
      <div className={`content ${position}`}>
        <div className='video-container'>
          <video
            autoPlay
            muted
            loop
            src={videoArr[imageid]}
          />
        </div>
        {seacondhed ? 
          <div className='texts'> 
            <div style={{display: 'flex', alignItems: "center", gap: "0.5rem"}}>
              <img style={{width: "3.2rem"}} src='heart.svg' /> <h2>by</h2>
            </div>
            <h1>{heading}</h1>
            <h1>{text}</h1>
          </div> : 
          <div className='texts'> 
            <h2>{heading}</h2>
            <h1>{text}</h1>
          </div>
        }
      </div>
    </div>
  );
};

export default Section;
