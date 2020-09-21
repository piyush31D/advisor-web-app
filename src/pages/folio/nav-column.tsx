import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames'
import styles from './nav-column.module.css';
import Button from 'src/components/button/text.button'

const NavColumn: React.FC = () => {
  return (
    <div className={cx(styles.navbar, 'flex col-flex cross-stretch')}>
      <NavLink to="/folio/all" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)}>
        <span>All Folios</span>
        <span className={styles.navlinkBadge}>103</span>
      </NavLink>
      <NavLink to="/editfolio" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)} >
        <span>New folio</span>
        <i className="pficon-plus font-medium" />
      </NavLink>
      <div className={styles.navTabBar}>
        <div className={cx(styles.navTab, styles.activeNavTab)}>
          Folios
        </div>
        <div className={styles.navTab}>
          Pinned
        </div>
      </div>
      <NavLink to="/folio/1" activeClassName={styles.activeGroupCard} className={styles.groupCard}>
        <p>Folio name</p>
        <div className="flex row-flex space-between cross-center">
          <span>.</span>
          <div className={styles.groupCardMenu}>
            <Button type="text-white" size="regular" icon="menu-overflow" />
          </div>
        </div>
      </NavLink>
      <NavLink to="/folio/2" activeClassName={styles.activeGroupCard} className={styles.groupCard}>
        <p>Telecom, brand low risk</p>
        <div className="flex row-flex space-between cross-center">
          <span>.</span>
          <div className={styles.groupCardMenu}>
            <Button type="text-white" size="regular" icon="menu-overflow" />
          </div>
        </div>
      </NavLink>
      <NavLink to="/folio/3" activeClassName={styles.activeGroupCard} className={styles.groupCard}>
        <p>Some random folio name</p>
        <div className="flex row-flex space-between cross-center">
          <span>.</span>
          <div className={styles.groupCardMenu}>
            <Button type="text-white" size="regular" icon="menu-overflow" />
          </div>
        </div>
      </NavLink>
      <NavLink to="/folio/4" activeClassName={styles.activeGroupCard} className={styles.groupCard}>
        <p>Intraday test folio</p>
        <div className="flex row-flex space-between cross-center">
          <span>.</span>
          <div className={styles.groupCardMenu}>
            <Button type="text-white" size="regular" icon="menu-overflow" />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default NavColumn;
