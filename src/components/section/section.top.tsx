import React from 'react';
import styles from './sectiontop.module.css'

const SectionTop: React.FC = ({children}) => {
  return (
    <div className={styles.sectionTop}> 
      {children} 
    </div>
  );
};

export default SectionTop;
