import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from './button.module.css';

interface Props {
  title?: string,
  type: 'solid' | 'text-accent' | 'text-primary',
  size: 'regular' | 'medium' | 'large',
  icon?: string,
  iconRight?: boolean | true
}
const Button: React.FC<Props> = (props) => {
  return (
    <button className={cx(styles.button, styles[props.type], styles[props.size])}>
      {/* {!props.iconRight && props.icon && <i className={cx(`pficon-${props.icon}`, styles[props.size])} />}
      {!props.iconRight && props.icon && props.title && <span className={styles.spacer} />} */}
      {props.title && props.title}
      {props.icon && props.title && <span className={styles.spacer} />}
      {props.icon && <i className={cx(`pficon-${props.icon}`, styles[props.size])} />}
    </button>
  );
};

export default Button;