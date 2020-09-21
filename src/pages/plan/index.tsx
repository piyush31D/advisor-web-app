import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import NavColumn from './navcolumn'
import styles from './index.module.css';

const PlanPage: React.FC = () => {
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn />
      <div className={styles.container}>
        <div className={styles.folio}>
          <div className={styles.folioHeader}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
