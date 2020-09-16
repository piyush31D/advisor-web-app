import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import NavColumn from './navcolumn'
import styles from './investors-page.module.css';
import Button from 'src/components/button/text.button';
import Tag from 'src/components/tag/tag';
import InvestorsPageRoute from 'src/routes/investors.page';

const UsersPage: React.FC = () => {
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn />
      <div className={styles.container}>
        <InvestorsPageRoute/>
      </div>
    </div>
  );
};

export default UsersPage;
