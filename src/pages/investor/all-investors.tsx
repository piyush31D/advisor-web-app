import React, { useState } from 'react';
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


function createData(name: string, plans: number, risk: string, groups: number, budget: number) {
  return { name, plans, risk, groups, budget };
}

const rows = [
  createData('James Sawyer', 1, 'Low', 2, 4.0),
  createData('Shyam P.', 2, 'Mod. Low', 7, 4.3),
  createData('Ram Pratap', 2, 'High', 4, 6.0),
  createData('Harvey Specter', 3, 'Mod. High', 6, 4.3),
  createData('Mike Ross', 6, 'Moderate', 9, 3.9),
  createData('James Sawyer', 1, 'Low', 2, 4.0),

];

const AllInvestors: React.FC = () => {
  const classes = useTableStyles();

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
        <div className="flex row-flex cross-center margin-bottom">
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
              <StyledTableCell>Plans</StyledTableCell>
              <StyledTableCell>Risk profile</StyledTableCell>
              <StyledTableCell>Groups</StyledTableCell>
              <StyledTableCell align="right">Budget</StyledTableCell>
              <StyledTableCell className={classes.noWhiteSpace} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell className={classes.checkboxCell}>
                  <Checkbox
                    name="check"
                    color="primary"
                  />
                </StyledTableCell>
                <StyledTableCell className={classes.avatarCell}>
                  <InvestorAvatar style={{ backgroundColor: false ? "#" + ((1 << 24) * Math.random() | 0).toString(16) : 'var(--border)' }} alt={row.name} />
                </StyledTableCell>
                <StyledTableCell className={classes.semiBold} scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.plans}</StyledTableCell>
                <StyledTableCell>{row.risk}</StyledTableCell>
                <StyledTableCell>{row.groups}</StyledTableCell>
                <StyledTableCell align="right">{row.budget + ' Lakh'}</StyledTableCell>
                <StyledTableCell>
                  <TextButton onClick={(e) => handleClick(e, 'INVESTOR_OPTION')} size="regular" type="text-primary" icon="menu-overflow" />
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
