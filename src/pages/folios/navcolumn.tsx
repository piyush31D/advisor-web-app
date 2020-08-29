import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames'
import styles from './foliospage.module.css';
import Button from 'src/components/button/button'

const NavColumn: React.FC = () => {
  return (
    <div className={cx(styles.navbar, 'flex col-flex cross-stretch')}>
      <NavLink to="/users" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)}>
        <span>All Folios</span>
        <span className={styles.navlinkBadge}>103</span>
      </NavLink>
      <NavLink to="/users/unattended" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)} >
        <span>New folio</span>
        <i className="pficon-plus font-medium"/>
      </NavLink>
      <div className={styles.navTabBar}>
        <div className={cx(styles.navTab, styles.activeNavTab)}>
          Folios
        </div>
        <div className={styles.navTab}>
          Pinned
        </div>
      </div>
      <div className={cx(styles.groupCard, styles.activeGroupCard)}>
        <p>Folio name</p>
        <div className="flex row-flex space-between cross-center">
          <span>.</span>
          <div className={styles.groupCardMenu}>
            <Button type="text-primary" size="regular" icon="menu-overflow" />
          </div>
        </div>
      </div>
      <div className={cx(styles.groupCard, styles.groupCard)}>
        <p>folioooooo name</p>
        <div className="flex row-flex space-between cross-center">
        <span>.</span>
          <div className={styles.groupCardMenu}>
            <Button type="text-primary" size="regular" icon="menu-overflow" />
          </div>
        </div>
      </div>
      <div className={cx(styles.groupCard, styles.groupCard)}>
        <p>long term home planning</p>
        <div className="flex row-flex space-between cross-center">
        <span>.</span>
          <div className={styles.groupCardMenu}>
            <Button type="text-primary" size="regular" icon="menu-overflow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavColumn;
