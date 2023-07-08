import React from 'react';

const Section = ({ image, text, position }) => {
  return (
    <div className={`section ${position}`}>
      <div className="content">
        <div className="image">{image}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Section;
