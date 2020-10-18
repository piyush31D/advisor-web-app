import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Checkbox from '@material-ui/core/Checkbox';
import TextButton from 'src/components/button/text.button';
import { StyledTableCell, StyledTableRow, InvestorAvatar, useTableStyles } from './styled-table';
import styles from './all-investors.module.css';
import PagePopover from './popover';
import RiskProfileTag from 'src/components/risk/risk-profile';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'src/store/config';
import { getInvestorsThunk } from 'src/store/investor/thunk';


const AllInvestors: React.FC = () => {
  const classes = useTableStyles();

  const dispatch = useDispatch();
  const { profile } = useSelector((state: IState) => state.profileReducer);
  const advisorId = profile ? profile._id : undefined;
  const { investors } = useSelector((state: IState) => state.investorReducer);

  useEffect(() => {
    advisorId && dispatch(getInvestorsThunk(advisorId));
  }, [advisorId, dispatch]);


  const [popoverState, setPopoverState] = useState<{ anchorEl: HTMLButtonElement | null, name: string | null }>({ anchorEl: null, name: null });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setPopoverState({ anchorEl: e.currentTarget, name });
  };
  const handleClose = () => {
    setPopoverState({ anchorEl: null, name: popoverState.name });
  };
  const open = Boolean(popoverState.anchorEl);

  return (
    <>
      <div className={styles.header}>
        <PagePopover name={popoverState.name} open={open} anchorEl={popoverState.anchorEl} handleClose={handleClose} />
        <div className="flex investor-flex cross-center margin-bottom">
          <span className="font-large text-primary bold">All Investors</span>
        </div>
      </div>
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
              <StyledTableCell>Plans</StyledTableCell>
              <StyledTableCell>Groups</StyledTableCell>
              <StyledTableCell align="right">Budget</StyledTableCell>
              <StyledTableCell className={classes.noWhiteSpace} />
            </TableRow>
          </TableHead>
          <TableBody>
            {investors.map((investor, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell className={classes.checkboxCell}>
                  <Checkbox
                    name="check"
                    color="primary"
                  />
                </StyledTableCell>
                <StyledTableCell className={classes.avatarCell}>
                  <InvestorAvatar style={{ backgroundColor: false ? "#" + ((1 << 24) * Math.random() | 0).toString(16) : 'var(--border)' }} alt={investor.firstName} />
                </StyledTableCell>
                <StyledTableCell className={classes.semiBold} scope="investor">
                  {investor.fullName}
                </StyledTableCell>
                <StyledTableCell>
                  <RiskProfileTag risk={2} />
                </StyledTableCell>
                <StyledTableCell>4</StyledTableCell>
                <StyledTableCell>{investor.groups.length}</StyledTableCell>
                <StyledTableCell align="right">3 Lakh</StyledTableCell>
                <StyledTableCell>
                  <TextButton onClick={(e) => handleClick(e, 'INVESTOR_OPTION')} size="regular" variant="text-primary" icon="menu-overflow" />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllInvestors;
