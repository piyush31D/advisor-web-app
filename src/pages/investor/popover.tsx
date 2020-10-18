import React, { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import cx from 'classnames';
import Popover from '@material-ui/core/Popover';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextButton from 'src/components/button/text.button';
import styles from './popover.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addInvestorsToGroupThunk, createGroupThunk } from '../../store/group/thunk'
import { FastField, FieldProps, Form, Formik } from 'formik';
import { IState } from 'src/store/config';
import investorApi from 'src/apis/investor'
import { IInvestor } from 'src/store/investor/type';
import { InvestorAvatar } from './styled-table'

const AddInvestor: React.FC<{ handleClose: () => void }> = (props) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state: IState) => state.profileReducer);
  const { selectedGroup } = useSelector((state: IState) => state.groupReducer);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [investorsState, setInvestorsState] = useState<IInvestor[]>([]);

  useEffect(() => {
    getInvestors();
  }, [searchQuery]);

  const onSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query: string = e.currentTarget.value;
    setSearchQuery(query);
  }

  const getInvestors = async () => {
    let investors: IInvestor[] = []
    if (searchQuery.length) {
      try {
        const { data: axiosData } = await investorApi.getInvestorsByName(advisorId, searchQuery);
        investors = axiosData.data.investors as IInvestor[]
      } catch (error) {
        console.error(error);
      }
    }
    setInvestorsState(investors);
  }


  if (!profile || !selectedGroup)
    return null
  const advisorId = profile._id;

  if (selectedGroup.index === undefined)
    return null
  const groupIndex = selectedGroup.index

  const submitSelection = (_id: string, investor: IInvestor) => {
    dispatch(addInvestorsToGroupThunk(advisorId, { _id: selectedGroup._id, index: groupIndex }, { _ids: [_id], investors: [investor] }));
  }
  return (
    <div className={styles.addInvestor}>
      <div className={styles.popoverInputWrap}>
        <input
          name="query"
          autoFocus
          placeholder="Search by name"
          type="text"
          className={styles.popoverInput}
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchQueryChange(e)}
        />
      </div>
      <span className={styles.divider}></span>
      {!investorsState.length &&
        <div className="font-small text-secondary margin-top margin-bottom--small text-center">Search and add Investors</div>
      }
      {investorsState.map((investor, i) => (
        <div key={i} role="button" onClick={() => submitSelection(investor._id, investor)} className={cx('cross-center', styles.menuItem)}>
          <InvestorAvatar />
          <span className="text-primary margin-left--small">{investor.fullName}</span>
        </div>
      ))}
    </div>
  )
}


const GroupCard: React.FC = () => (
  <div className={styles.groupCard}>
    <div className={styles.menuItem}>
      <span className="pficon-plus-circle margin-right--small" />
      <span className="text-primary">Add Selected here</span>
    </div>
    <div className={styles.menuItem}>
      <span className="pficon-delete margin-right--small" />
      <span className="text-primary">Delete group</span>
    </div>
    <div className={styles.menuItem}>
      <span className="pficon-edit margin-right--small" />
      <span className="text-primary">Edit group</span>
    </div>
  </div>
)


const InvestorOption: React.FC = () => {
  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handleClick = (e: MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handleClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const open = Boolean(popoverState.anchorEl);

  return (
    <div className={styles.groupCard}>
      <PagePopover name={popoverState.name} open={open} anchorEl={popoverState.anchorEl} handleClose={handleClose} transformOrigin={{ vertical: 'top', horizontal: 'right' }} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
      <button className={styles.menuItem}>
        <span className="pficon-delete margin-right--small" />
        <span className="text-primary">Remove from group</span>
      </button>
      <button onClick={(e) => handleClick(e, 'CHOOSE_GROUP')} className={styles.menuItem}>
        <span className="pficon-plus-circle margin-right--small" />
        <span className="text-primary">Add to another group</span>
      </button>
    </div>
  )
}

const ChooseGroup: React.FC = () => (
  <div className={styles.addInvestor}>
    <div className={styles.popoverInputWrap}>
      <input autoFocus placeholder="Search Groups" type="text" className={styles.popoverInput} />
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

const CreateGroup: React.FC<{ handleClose: () => void }> = (props) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state: IState) => state.profileReducer);

  if (!profile)
    return null

  const advisorId = profile._id;

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={values => {
        dispatch(createGroupThunk({
          name: values.name,
          investors: [],
        }, advisorId));
        props.handleClose();
      }}
    >
      <Form className={styles.addGroup}>
        <div className={styles.popoverInputWrap}>
          <div className="padding-bottom font-medium text-primary semi-bold">Enter a Group name to continue</div>
          <FastField name="name">
            {({ field }: FieldProps) => (
              <TextareaAutosize
                {...field}
                rowsMax={3}
                autoFocus
                placeholder="Group name"
                className={styles.popoverInput}
              />
            )}
          </FastField>
          <div className="font-small text-secondary margin-top">You can change it anytime</div>
        </div>
        <div style={{ padding: '15px 10px 5px 10px' }}>
          <TextButton type="submit" thick fullWidth variant="fill-accent" size="regular" title="Create Group" icon="chevron-right" />
        </div>
      </Form>
    </Formik>
  )
}


interface Props {
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  open: boolean;
  name: string | null;
  transformOrigin?: TransformOrigin;
  anchorOrigin?: AnchorOrigin;
}
interface TransformOrigin {
  vertical: number | "top" | "center" | "bottom";
  horizontal: number | "center" | "left" | "right";
}
interface AnchorOrigin {
  vertical: number | "top" | "center" | "bottom";
  horizontal: number | "center" | "left" | "right";
}

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
      {props.name === 'ADD_INVESTOR' && <AddInvestor handleClose={props.handleClose} />}
      {props.name === 'GROUP_CARD' && <GroupCard />}
      {props.name === 'INVESTOR_OPTION' && <InvestorOption />}
      {props.name === 'CHOOSE_GROUP' && <ChooseGroup />}
      {props.name === 'CREATE_GROUP' && <CreateGroup handleClose={props.handleClose} />}
    </Popover>
  )
}

export default PagePopover