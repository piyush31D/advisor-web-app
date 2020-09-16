import React from 'react';
import cx from 'classnames';
import styles from './text-button.module.css';

interface Props {
  title?: string,
  type: 'solid' | 'text-accent' | 'text-primary'|'text-red'|'text-white',
  size: 'regular' | 'medium' | 'large',
  icon?: string,
  iconRight?: boolean | true,
  onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} className={cx(styles.button, styles[props.type], styles[props.size])}>
      {props.title && props.title}
      {props.icon && props.title && <span className={styles.spacer} />}
      {props.icon && <i className={cx(`pficon-${props.icon}`, styles[props.size])} />}
    </button>
  );
};

export default Button;