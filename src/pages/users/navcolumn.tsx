import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames'
import styles from './userspage.module.css';
import Button from 'src/components/button/button'

const NavColumn: React.FC = () => {
  return (
    <div className={cx(styles.navbar, 'flex col-flex cross-stretch')}>
      <NavLink to="/users" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)}>
        <span>All users</span>
        <span className={styles.navlinkBadge}>1973</span>
      </NavLink>
      <NavLink to="/users/unattended" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)} >
        <span>Ungrouped</span>
        <span className={styles.navlinkBadge}>46</span>
      </NavLink>
      <div className={styles.groupsWrap}>
        <div className="flex row-flex cross-center space-between font-secondary bold font-medium">
          <span>User groups</span>
          <Button size="medium" type="text-accent" icon="plus" title="New" />
        </div>
        <div className={cx(styles.groupCard)}>
          <p>Show all groups</p>
        </div>
        <div className={cx(styles.groupCard, styles.activeGroupCard)}>
          <p>Intraday low risk, mid budget</p>
          <div className="flex row-flex space-between cross-center">
            <span><i className={cx(styles.iconMargin, 'pficon-users')} />70 users</span>
            <div className={styles.groupCardMenu}>
              <Button type="text-primary" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </div>
        <div className={cx(styles.groupCard, styles.groupCard)}>
          <p>group name</p>
          <div className="flex row-flex space-between cross-center">
            <span><i className={cx(styles.iconMargin, 'pficon-users')} />70 users</span>
            <div className={styles.groupCardMenu}>
              <Button type="text-primary" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </div>
        <div className={cx(styles.groupCard, styles.groupCard)}>
          <p>long term home planning</p>
          <div className="flex row-flex space-between cross-center">
            <span><i className={cx(styles.iconMargin, 'pficon-users')} />70 users</span>
            <div className={styles.groupCardMenu}>
              <Button type="text-primary" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavColumn;
