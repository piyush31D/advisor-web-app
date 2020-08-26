import React from 'react';
import './section.top.style.css'

const SectionTop: React.FC = ({children}) => {
  return (
    <div className="section--top"> 
      {children} 
    </div>
  );
};

export default SectionTop;
