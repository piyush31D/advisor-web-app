import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from './sidebar.module.css'

const Sidebar: React.FC = () => {
  // console.log('sidebar');
  const [isDarkThemeActive, setDarkThemeActive] = useState<boolean>(false);
  const handleThemeSwitch = () => {
    if (isDarkThemeActive) { document.documentElement.className = 'light-theme'; }
    else { document.documentElement.className = 'dark-theme'; }
    setDarkThemeActive(!isDarkThemeActive);
  }

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
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/folio">
          <i className={cx(styles.navicon, 'pficon-folio')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/investor">
          <i className={cx(styles.navicon, 'pficon-users')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/plan">
          <i className={cx(styles.navicon, 'pficon-plans')}></i>
        </NavLink>
        <NavLink className={cx(styles.navlink)} activeClassName={cx(styles.activeNavlink)} to="/chat">
          <i className={cx(styles.navicon, 'pficon-chat')}></i>
        </NavLink>
      </div>
      <div className={styles.bottomActions}>
        <div role="button" onClick={handleThemeSwitch} className={styles.themeSwitcher}>
          <div className={cx(styles.themeSwitcherIcon, !!isDarkThemeActive && styles.darkThemeActive)}>
            <span className={cx(styles.front, "pficon-circle")} />
            <span className={cx(styles.back, "pficon-circle")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
