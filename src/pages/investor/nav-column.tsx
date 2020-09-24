import React from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import TextButton from 'src/components/button/text.button';
import styles from './index.module.css';

const NavColumn: React.FC = () => {
  return (
    <div className={cx(styles.navbar, 'flex col-flex cross-stretch')}>
      <NavLink to="/investor/all" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)}>
        <span>All Investors</span>
        <span className={styles.navlinkBadge}>1973</span>
      </NavLink>
      <NavLink to="/investor/unattended" className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)} >
        <span>Unattended</span>
        <span className={styles.navlinkBadge}>46</span>
      </NavLink>
      <div className={styles.groupsWrap}>
        <div className="flex row-flex cross-center space-between text-white semi-bold font-medium margin-bottom">
          <span style={{ paddingLeft: 5 }}>Groups</span>
          <TextButton type="text-white" size="medium" icon="plus" />
        </div>
        <div className={cx(styles.groupCard)}>
          <p>Show all groups</p>
        </div>
        <NavLink to="/investor/group/1" className={styles.groupCard} activeClassName={styles.activeGroupCard}>
          <div>
            <p>Intraday low risk, mid budget</p>
            <div className="flex row-flex space-between cross-center">
              <span><i className={cx(styles.iconMargin, 'pficon-users')} />70 users</span>
              <div className={styles.groupCardMenu}>
                <TextButton onClick={(e) => e.preventDefault()} type="text-white" size="regular" icon="menu-overflow" />
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/investor/group/2" className={styles.groupCard} activeClassName={styles.activeGroupCard}>
          <p>group name</p>
          <div className="flex row-flex space-between cross-center">
            <span><i className={cx(styles.iconMargin, 'pficon-users')} />70 users</span>
            <div className={styles.groupCardMenu}>
              <TextButton onClick={(e) => e.preventDefault()} type="text-white" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/investor/group/3" className={styles.groupCard} activeClassName={styles.activeGroupCard}>
          <p>long term home planning</p>
          <div className="flex row-flex space-between cross-center">
            <span><i className={cx(styles.iconMargin, 'pficon-users')} />70 users</span>
            <div className={styles.groupCardMenu}>
              <TextButton onClick={(e) => e.preventDefault()} type="text-white" size="regular" icon="menu-overflow" />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavColumn;
