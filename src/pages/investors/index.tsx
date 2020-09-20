import React from 'react';
import NavColumn from './nav-column'
import styles from './index.module.css';
import InvestorsPageRoute from 'src/routes/investors.page';

const InvestorsPage: React.FC = () => {
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn />
      <div className={styles.container}>
        <InvestorsPageRoute/>
      </div>
    </div>
  );
};

export default InvestorsPage;
