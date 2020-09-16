import React from 'react';
import cx from 'classnames';
import styles from './tag.module.css';

interface Props {
  title?: string,
  color: 'grey' | 'blue' | 'red' | 'yellow' | 'green',
  size: 'regular' | 'medium' | 'large',
  icon?: string
}
const Tag: React.FC<Props> = (props) => {
  return (
    <div className={cx(styles.tag,styles[props.color], styles[props.size])}>
      {props.icon && <i className={cx(`pficon-${props.icon}`, styles[props.size])} />}
      {props.icon && props.title && <span className={styles.spacer} />}
      {props.title && props.title}
    </div>
  );
};

export default Tag;