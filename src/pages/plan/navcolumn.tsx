import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames'
import styles from './index.module.css';
import Button from 'src/components/button/text.button';

const NavColumn: React.FC = () => {
  return (
    <div className={cx(styles.navbar, 'flex col-flex cross-stretch')}>
      <NavLink to="/folios" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)}>
        <span>All Plans</span>
        <span className={styles.navlinkBadge}>13</span>
      </NavLink>
      <NavLink to="/editfolio" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)} >
        <span>New Plan</span>
        <i className="pficon-plus font-medium" />
      </NavLink>
      <div className={styles.groupsWrap}>
        <div className={cx(styles.groupCard)}>
          <p>Folio name</p>
          <div className="flex row-flex space-between cross-center">
            <span>.</span>
            <div className={styles.groupCardMenu}>
              <Button type="text-white" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </div>
        <div className={cx(styles.groupCard, styles.activeGroupCard)}>
          <p>Telecom, brand low risk</p>
          <div className="flex row-flex space-between cross-center">
            <span>.</span>
            <div className={styles.groupCardMenu}>
              <Button type="text-white" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </div>
        <div className={cx(styles.groupCard, styles.groupCard)}>
          <p>Some random folio name</p>
          <div className="flex row-flex space-between cross-center">
            <span>.</span>
            <div className={styles.groupCardMenu}>
              <Button type="text-white" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </div>
        <div className={cx(styles.groupCard, styles.groupCard)}>
          <p>Intraday test folio</p>
          <div className="flex row-flex space-between cross-center">
            <span>.</span>
            <div className={styles.groupCardMenu}>
              <Button type="text-white" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavColumn;
