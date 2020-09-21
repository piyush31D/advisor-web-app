import React from 'react';
import NavColumn from './nav-column'
import styles from './index.module.css';
import InvestorRoute from 'src/routes/investor';

const InvestorsPage: React.FC = () => {
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn />
      <div className={styles.container}>
        <InvestorRoute />
      </div>
    </div>
  );
};

export default InvestorsPage;
