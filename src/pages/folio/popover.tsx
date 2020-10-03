import React, { useState } from 'react';
import cx from 'classnames';
import Popover from '@material-ui/core/Popover';
import styles from './popover.module.css';
import { NavLink } from 'react-router-dom';

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

const GroupCard: React.FC<{ id: string | undefined }> = ({ id }) => (
  <div className={styles.groupCard}>
    <div className={styles.menuItem}>
      <span className="pficon-plus-circle margin-right--small" />
      <span className="text-primary">Add Selected here</span>
    </div>
  </div>
)


const FolioOptions: React.FC<{ id: string | undefined }> = ({ id }) => {
  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handleClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const open = Boolean(popoverState.anchorEl);

  return (
    <div className={styles.folioOptions}>
      <button type="button" onClick={(e) => handleClick(e, 'ADD_SCRIP')} className={styles.menuItem}>
        <span className="pficon-plus-circle margin-right" />
        <span>Add stocks</span>
      </button>
      <PagePopover
        name={popoverState.name}
        open={open}
        anchorEl={popoverState.anchorEl}
        handleClose={handleClose}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <NavLink to="/folio/1/edit" className={styles.menuItem}>
        <span className="pficon-edit margin-right" />
        <span>Edit folio</span>
      </NavLink>
      <NavLink to="/folio/1/create" className={styles.menuItem}>
        <span className="pficon-trades margin-right" />
        <span>Create trades</span>
      </NavLink>
    </div>
  )
}


const AddScrip: React.FC<{ id: string | undefined }> = ({ id }) => (
  <div className={styles.addStock}>
    <div className={styles.popoverInputWrap}>
      <input
        autoFocus
        aria-describedby={id}
        placeholder="Search and add Stocks"
        type="text"
        className={styles.popoverInput}
      />
    </div>
    <span className={styles.divider}></span>
    <div className={cx(styles.menuItem, styles.padding20, 'space-between')}>
      <span className="text-primary">IDEA</span>
      <span className="text-accent">NSE</span>
    </div>
    <div className={cx(styles.menuItem, styles.padding20, 'space-between')}>
      <span className="text-primary">IDEA</span>
      <span className="text-accent">NSE</span>
    </div>
    <div className={cx(styles.menuItem, styles.padding20, 'space-between')}>
      <span className="text-primary">IDEA</span>
      <span className="text-accent">NSE</span>
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
      {props.name === 'FOLIO_OPTION' && <FolioOptions id={id} />}
      {props.name === 'ADD_SCRIP' && <AddScrip id={id} />}
    </Popover>
  )
}

export default PagePopover