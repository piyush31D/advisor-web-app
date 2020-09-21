import React from 'react';
import NavColumn from './nav-column'
import styles from './index.module.css';
import FoliosPageRoute from 'src/routes/folio';

const FoliosPage: React.FC = () => {
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn />
      <div className={styles.container}>
        <FoliosPageRoute />
      </div>
    </div>
  );
};

export default FoliosPage;
