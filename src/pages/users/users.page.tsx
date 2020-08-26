import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames'
import styles from './userspage.module.css';

const UsersPage: React.FC = () => {
  return (
    <div className="flex fill row-flex cross-stretch">
      <div className={cx(styles.navbar,'flex col-flex cross-stretch')}>
        <NavLink to="/users" className={cx(styles.navlink,'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)}>
          <span>All users</span>
          <span className={styles.navlinkBadge}>1973</span>
          </NavLink>
        <NavLink to="/users/unattended" className={cx(styles.navlink,'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)} >
        <span>Unatended</span>
          <span className={styles.navlinkBadge}>46</span>
        </NavLink>
        <div className={styles.groupsWrap}>
          <div className="flex row-flex cross-center space-between font-secondary bold font-medium">
            <span>User groups</span>
            <span>
              <i className="font-accent font-medium pficon-plus"/>
              <span className="font-accent font-medium bold">New</span>
            </span>
          </div>
          <div className={cx(styles.groupCard,styles.activeGroupCard)}>
            <p>group name</p>
            <span><i className="pficon-users"/>70 users</span>
          </div>
          <div className={cx(styles.groupCard,styles.groupCard)}>
            <p>group name</p>
            <span><i className="pficon-users"/>70 users</span>
          </div>
          <div className={cx(styles.groupCard,styles.groupCard)}>
            <p>group name</p>
            <span><i className="pficon-users"/>70 users</span>
          </div>
          <div className={cx(styles.groupCard)}>
            <p>group name</p>
            <span><i className="pficon-users"/>70 users</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
