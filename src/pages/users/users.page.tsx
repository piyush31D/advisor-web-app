import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import NavColumn from './navcolumn'
import styles from './userspage.module.css';
import Button from 'src/components/button/button';
import Tag from 'src/components/tag/tag'

const UsersPage: React.FC = () => {
  return (
    <div className="flex fill row-flex cross-stretch">
      <NavColumn />
      <div className={styles.container}>
        <div className="flex row-flex cross-center margin-bottom">
          <span className="font-large text-primary bold">Intraday low risk, mid budget</span>
          <div className="flex fill row-flex main-center">
            <Tag color="yellow" icon="meter" size="regular" title="Conservative" />
            <Tag color="green" icon="rupee" size="regular" title="0 - 1L" />
            <Button size="regular" type="text-accent" icon="settings"></Button>
          </div>
          <Button size="regular" type="text-accent" icon="plus" title="Add user"></Button>
        </div>
        <div className="flex row-flex cross-center">
          <span className="font-regular text-primary margin-right"><i className={cx('pficon-users', styles.iconMargin)} />70 users</span>
          <Button size="regular" type="text-primary" icon="folio" title="5 folios"></Button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
