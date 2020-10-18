import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TextButton from 'src/components/button/text.button';
import { StyledTableCell, StyledTableRow, InvestorAvatar, useTableStyles } from './styled-table';
import Tag from 'src/components/tag/tag';
import styles from './group.module.css';
import PagePopover from './popover';
import RiskProfileTag from 'src/components/risk/risk-profile';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'src/store/config';
import { getGroupThunk } from 'src/store/group/thunk';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { IInvestor } from 'src/store/investor/type';

// TODO seperate component for investor's row

interface GroupHeaderProps {
  groupName: string;
}
const GroupHeader: React.FC<GroupHeaderProps> = (props) => {
  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handleClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const open = Boolean(popoverState.anchorEl);

  return (
    <div className={styles.header}>
      <PagePopover name={popoverState.name} open={open} anchorEl={popoverState.anchorEl} handleClose={handleClose} />
      <div className="flex cross-center margin-bottom--small padding-bottom">
        <div style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'var(--accent-shade)' }} className="flex cross-center main-center margin-right--small">
          <span className="pficon-users" />
        </div>
        <span className="font-large flex fill text-primary bold">{props.groupName}</span>
      </div>
      <div className="flex row-flex cross-center margin-bottom">
        <div className="flex fill row-flex cross-center">
          <Tag color="yellow" icon="meter" size="regular" title="Low + Con. + Mod." />
          <Tag color="teal" icon="rupee" size="regular" title="99k - 20L" />
          <TextButton size="regular" variant="fill-primary" title="+2"></TextButton>
          <span className="margin-right margin-left" />
          <TextButton size="regular" variant="fill-primary" icon="folio" title="5 folios"></TextButton>
          <span className="margin-right--small" />
          <TextButton size="regular" variant="text-primary" icon="menu-overflow"></TextButton>
        </div>
        <span className="pficon-users" style={{ marginRight: 2 }} />
        <span className="margin-right semi-bold">14</span>
        <TextButton onClick={(e) => handleClick(e, 'ADD_INVESTOR')} size="regular" variant="text-accent" icon="plus" title="Add"></TextButton>
      </div>
    </div>
  )
}

interface MatchParmas {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParmas> { }

const Group: React.FC<MatchProps> = (props) => {
  const classes = useTableStyles();
  const dispatch = useDispatch();

  const { selectedGroup, groups } = useSelector((state: IState) => state.groupReducer);
  const advisorId = useSelector((state: IState) => state.profileReducer.profile?._id);

  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handleClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const open = Boolean(popoverState.anchorEl);

  useEffect(() => {
    if (advisorId && (!selectedGroup || !selectedGroup.data || !selectedGroup.data.investors)) {
      const groupId: string = props.match.params.id
      dispatch(getGroupThunk(advisorId, groupId))
    }
  }, [dispatch, selectedGroup, advisorId])

  if (!selectedGroup || !selectedGroup?.data)
    return null

  return (
    <>
      <GroupHeader groupName={selectedGroup.data?.name} />
      <SimpleBar style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <TableContainer className={styles.tableWrap}>
          <Table stickyHeader className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.checkboxCell}>
                  <Checkbox
                    name="check"
                    color="primary"
                  />
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Risk profile</StyledTableCell>
                <StyledTableCell>Subscriptions</StyledTableCell>
                <StyledTableCell>Groups</StyledTableCell>
                <StyledTableCell align="right">Budget</StyledTableCell>
                <StyledTableCell className={classes.noWhiteSpace} />
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedGroup.data.investors?.map((investor, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell className={classes.checkboxCell}>
                    <Checkbox
                      name="check"
                      color="primary"
                    />
                  </StyledTableCell>
                  <StyledTableCell className={classes.avatarCell}>
                    <InvestorAvatar style={{ backgroundColor: false ? "#" + ((1 << 24) * Math.random() | 0).toString(16) : 'var(--border)' }} alt={investor.fullName} />
                  </StyledTableCell>
                  <StyledTableCell className={classes.semiBold} scope="row">
                    {investor.fullName}
                  </StyledTableCell>
                  <StyledTableCell>
                    <RiskProfileTag risk={2} />
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="right">0 Lakh</StyledTableCell>
                  <StyledTableCell>
                    <TextButton onClick={(e) => handleClick(e, 'INVESTOR_OPTION')} size="regular" variant="text-primary" icon="menu-overflow" />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SimpleBar>
    </>
  );
};

export default Group;
