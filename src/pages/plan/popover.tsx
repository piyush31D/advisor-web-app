import React, { useState } from 'react';
import cx from 'classnames';
import Popover from '@material-ui/core/Popover';
import TextButton from 'src/components/button/text.button'
import styles from './popover.module.css';

interface Props {
  anchorEl: HTMLButtonElement | null;
  handleClose: (e: HTMLButtonElement) => void;
  open: boolean;
  name: string | null;
  transformOrigin?: TransformOrigin;
  anchorOrigin?: AnchorOrigin
}
interface TransformOrigin {
  vertical: number | "top" | "center" | "bottom";
  horizontal: number | "center" | "left" | "right";
}
interface AnchorOrigin {
  vertical: number | "top" | "center" | "bottom";
  horizontal: number | "center" | "left" | "right";
}

const AddInstrument: React.FC<{ id: string | undefined }> = ({ id }) => (
  <div className={styles.groupCard}>
    <div className={styles.menuItem}>
      <span className="text-primary">Equity</span>
    </div>
    <div className={styles.menuItem}>
      <span className="text-primary">Futures</span>
    </div>
    <div className={styles.menuItem}>
      <span className="text-primary">Options</span>
    </div>
  </div>
)

const PagePopover: React.FC<Props> = (props) => {

  const id = props.open ? 'simple-popover' : undefined;
  return (
    <Popover
      id={id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      elevation={8}
      anchorOrigin={props.anchorOrigin ? props.anchorOrigin : {
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={props.transformOrigin ? props.transformOrigin : {
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {props.name === 'ADD_INSTRUMENT' && <AddInstrument id={id} />}
    </Popover>
  )
}

export default PagePopover