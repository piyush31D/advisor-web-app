import React, { useState } from 'react';
import styles from './index.module.css';

import InvestorRoute from 'src/routes/investor';
import NavColumn, { NavColumnLink, NavColumnCard } from 'src/components/navcolumn/nav-column';
import TextButton from 'src/components/button/text.button'
import PagePopover from './popover';

const InvestorsPage: React.FC = () => {
  const investorCount = 13;

  function createGroupData(_id: string, name: string, investorCount: number) {
    return { _id, name, investorCount };
  }

  const groups = [
    createGroupData('121', 'Random Group Name', 34),
    createGroupData('122', 'Options high risk Low budget', 124),
    createGroupData('123', 'Goal home high budget', 124),
  ];

  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handlePopoverTrigger = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handlePopoverClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const popoverOpen = Boolean(popoverState.anchorEl);

  return (
    <div className="flex fill row-flex cross-stretch">
      <PagePopover
        name={popoverState.name}
        open={popoverOpen}
        anchorEl={popoverState.anchorEl}
        handleClose={handlePopoverClose}
        anchorOrigin={{vertical:'center',horizontal:'left'}}
        transformOrigin={{vertical:'center',horizontal:'left'}}
      />
      <NavColumn>
        <NavColumnLink linkTo="/investor/all" title="All Investors" badgeText={investorCount.toString()} />
        <NavColumnLink linkTo="/investor/unattended" title="Unattended" badgeText={investorCount.toString()} />
        <div className="margin-top margin-bottom" />
        <div className="flex row-flex cross-center space-between text-white semi-bold font-medium margin-bottom--small">
          <span style={{ paddingLeft: 5 }}>Groups</span>
          <TextButton onClick={(e)=>handlePopoverTrigger(e,'CREATE_GROUP')} variant="text-white" size="medium" icon="plus" />
        </div>
        <NavColumnCard linkTo="investor/group/all" name='Show all groups' />
        {groups.map((group, index) => (
          <NavColumnCard
            linkTo={`/investor/group/${group._id}`}
            name={group.name}
            brief={
              <span>
                <span className="pficon-users margin-right--small" />
                {group.investorCount} users
              </span>
            }
            overflowMenu={
              <TextButton
                onClick={(e) => {
                  e.preventDefault();
                  handlePopoverTrigger(e, 'GROUP_CARD');
                }}
                variant="text-white"
                size="regular"
                icon="menu-overflow"
              />
            }
          />
        ))}
      </NavColumn>
      <div className={styles.container}>
        <InvestorRoute />
      </div>
    </div>
  );
};

export default InvestorsPage;
