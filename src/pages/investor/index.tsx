import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import InvestorRoute from 'src/routes/investor';
import NavColumn, { NavColumnLink, NavColumnCard } from 'src/components/navcolumn/nav-column';
import TextButton from 'src/components/button/text.button'
import PagePopover from './popover';
import { getGroupsThunk } from '../../store/group/thunk'
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'src/store/config';
import { setSelectedGroupAction } from 'src/store/group/action';

const InvestorNavColumn: React.FC = () => {
  const investorCount = 13;
  const dispatch = useDispatch();
  const { profile } = useSelector((state: IState) => state.profileReducer);
  const advisorId = profile ? profile._id : undefined;
  const { groups, selectedGroup } = useSelector((state: IState) => state.groupReducer);

  useEffect(() => {
    advisorId && dispatch(getGroupsThunk(advisorId));
  }, [advisorId, dispatch]);

  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handlePopoverTrigger = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handlePopoverClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const popoverOpen = Boolean(popoverState.anchorEl);

  return (
    <>
      <PagePopover
        name={popoverState.name}
        open={popoverOpen}
        anchorEl={popoverState.anchorEl}
        handleClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      />
      <NavColumn>
        <NavColumnLink linkTo="/investor/all" title="All Investors" badgeText={investorCount.toString()} />
        <NavColumnLink linkTo="/investor/unattended" title="Unattended" badgeText={investorCount.toString()} />
        <div className="margin-top margin-bottom padding-bottom" />
        <div className="flex row-flex cross-center space-between text-white semi-bold font-medium margin-bottom--small">
          <span style={{ paddingLeft: 5 }}>Groups</span>
          <TextButton onClick={(e) => handlePopoverTrigger(e, 'CREATE_GROUP')} variant="text-white" size="medium" icon="plus" />
        </div>
        <NavColumnCard linkTo="/investor/group/all" name='Show all groups' />
        <div className="padding-bottom" />
        {groups.map((group, i) =>
          <NavColumnCard
            linkTo={`/investor/group/${group._id}`}
            key={i}
            onClick={() => {
              if (selectedGroup?._id !== group._id)
                dispatch(setSelectedGroupAction({ index: i, data: group, _id: group._id }));
              else
                dispatch(setSelectedGroupAction({ index: i, _id: group._id }))
            }}
            name={group.name}
            brief={
              <span>
                <span className="pficon-users margin-right--small" />
                  users
              </span>
            }
            overflowMenu={
              <TextButton
                onClick={(e) => {
                  e.stopPropagation();
                  handlePopoverTrigger(e, 'GROUP_CARD');
                }}
                variant="text-white"
                size="regular"
                icon="menu-overflow"
              />
            }
          />)}
      </NavColumn>
    </>
  )
}

const InvestorsPage: React.FC = () => (
  <div className="flex fill row-flex cross-stretch">
    <InvestorNavColumn />
    <div className={styles.container}>
      <InvestorRoute />
    </div>
  </div>
)

export default InvestorsPage;
