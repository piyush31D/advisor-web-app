import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from './sidebar.module.css'

const Sidebar: React.FC = () => {
  // console.log('sidebar');
  
  return (
    <div className={cx(styles.navbarContainer)}>
      {console.log('sidebar')
      }
      <div className={cx(styles.navbarAvatar)}></div>
      <div className="container--navlinks">
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/dashboard">
            <i className={cx(styles.navicon, 'pficon-dashboard')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/trades">
            <i className={cx(styles.navicon, 'pficon-trades')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/folios">
            <i className={cx(styles.navicon, 'pficon-folio')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/users">
            <i className={cx(styles.navicon, 'pficon-users')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/plans">
            <i className={cx(styles.navicon, 'pficon-plans')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/chats">
            <i className={cx(styles.navicon, 'pficon-chat')}></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
