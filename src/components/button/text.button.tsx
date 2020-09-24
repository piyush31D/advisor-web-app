import React from 'react';
import cx from 'classnames';
import styles from './text-button.module.css';

interface Props {
  title?: string,
  type: 'solid' | 'text-accent' | 'text-primary' | 'text-grey' | 'text-red' | 'text-white' | 'fill-accent',
  round?: boolean,
  thick?: boolean,
  size: 'regular' | 'medium' | 'large',
  icon?: string,
  iconRight?: boolean | true,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} className={cx(styles.button, styles[props.type], styles[props.size], props.round && styles.round, props.thick && styles.thick)}>
      <span className={styles.buttonText}>
        {props.title && props.title}
        {props.icon && props.title && <span className={styles.spacer} />}
        {props.icon && <i className={cx(`pficon-${props.icon}`, styles[props.size])} />}
      </span>
    </button>
  );
};

export default Button;