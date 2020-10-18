import React, { ReactNode } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import cx from 'classnames'
import styles from './nav-column.module.css';
import SimpleBar from 'simplebar-react';
import { useSelector } from 'react-redux';
import { IState } from 'src/store/config';

interface NavColumnCardProps {
  onClick?: () => void;
  linkTo: string;
  _id?: string;
  name: string;
  brief?: ReactNode;
  overflowMenu?: ReactNode;
}
export const NavColumnCard: React.FC<NavColumnCardProps> = (props) => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div
      role="button"
      onClick={() => {
        if (props.onClick)
          props.onClick();
        history.push(props.linkTo);
      }}
      className={cx(styles.navCard, location.pathname === props.linkTo && styles.activeNavCard)} >
      <p>{props.name}</p>
      {props.brief && <div className="flex row-flex space-between cross-center">
        <span>{props.brief}</span>
        {props.overflowMenu &&
          <div className={styles.groupCardMenu}>
            {props.overflowMenu}
          </div>
        }
      </div>}
    </div>
  )
}
interface NavColumnLinkProps {
  linkTo: string,
  title: string,
  badgeText?: string,
  icon?: string
}
export const NavColumnLink: React.FC<NavColumnLinkProps> = (props) => {
  return (
    <NavLink to={props.linkTo} className={cx(styles.navlink, 'flex row-flex space-between cross-center')} activeClassName={cx(styles.activeNavlink)}>
      <span>{props.title}</span>
      {props.badgeText && <span className={styles.navlinkBadge}>{props.badgeText}</span>}
      {props.icon && <span className={`pficon-${props.icon} font-medium`} />}
    </NavLink>
  )
}

interface NavColumnProps {
  children: ReactNode
}
const NavColumn: React.FC<NavColumnProps> = (props) => {
  return (
    <div className={cx(styles.navbar, 'flex col-flex cross-stretch')}>
      <SimpleBar style={{ padding: '18px 10px 10px 10px', minHeight: 0 }}>
        {props.children}
      </SimpleBar>
    </div>
  )
};

export default NavColumn;
