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

const AddInvestor: React.FC<{ id: string | undefined }> = ({ id }) => (
  <div className={styles.addInvestor}>
    <div className={styles.popoverInputWrap}>
      <input autoFocus aria-describedby={id} placeholder="Search Investors" type="text" className={styles.popoverInput} />
    </div>
    <span className={styles.divider}></span>
    <div className={cx(styles.menuItem, styles.padding20)}>
      <span className="text-primary">IDEA</span>
    </div>
    <div className={cx(styles.menuItem, styles.padding20)}>
      <span className="text-primary">IDEA</span>
    </div>
  </div>
)
const GroupCard: React.FC<{ id: string | undefined }> = ({ id }) => (
  <div className={styles.groupCard}>
    <div className={styles.menuItem}>
      <span className="pficon-plus-circle margin-right--small" />
      <span className="text-primary">Add Selected here</span>
    </div>
  </div>
)
const InvestorOption: React.FC<{ id: string | undefined }> = ({ id }) => {
  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handleClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const open = Boolean(popoverState.anchorEl);

  return (
    <div className={styles.groupCard}>
      <PagePopover name={popoverState.name} open={open} anchorEl={popoverState.anchorEl} handleClose={handleClose} transformOrigin={{ vertical: 'top', horizontal: 'right' }} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
      <button onClick={(e) => handleClick(e, 'CHOOSE_GROUP')} className={styles.menuItem}>
        <span className="pficon-plus-circle margin-right--small" />
        <span className="text-primary">Add to group</span>
      </button>
    </div>
  )
}
const ChooseGroup: React.FC<{ id: string | undefined }> = ({ id }) => (
  <div className={styles.addInvestor}>
    <div className={styles.popoverInputWrap}>
      <input autoFocus aria-describedby={id} placeholder="Search Groups" type="text" className={styles.popoverInput} />
    </div>
    <span className={styles.divider}></span>
    <div className={cx(styles.menuItem)}>
      <span className="pficon-users margin-right--small  margin-left--small" />
      <span className="text-primary">Intraday low risk</span>
    </div>
    <div className={cx(styles.menuItem)}>
      <span className="pficon-users margin-right--small  margin-left--small" />
      <span className="text-primary">Options high risk Low budget</span>
    </div>
  </div>
)
const AddGroup: React.FC<{ id: string | undefined }> = ({ id }) => (
  <div className={styles.addInvestor}>
    <div className={styles.popoverInputWrap}>
      <span className="margin-bottom font-medium text-primary">Enter Group name to continue</span>
      <span className="margin-bottom font-small text-secondary">You can change it later</span>
      <input autoFocus aria-describedby={id} placeholder="Enter group name" type="text" className={styles.popoverInput} />
    </div>
    <TextButton thick type="fill-accent" size="regular"/>
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
      {props.name === 'ADD_INVESTOR' && <AddInvestor id={id} />}
      {props.name === 'GROUP_CARD' && <GroupCard id={id} />}
      {props.name === 'INVESTOR_OPTION' && <InvestorOption id={id} />}
      {props.name === 'CHOOSE_GROUP' && <ChooseGroup id={id} />}
    </Popover>
  )
}

export default PagePopover