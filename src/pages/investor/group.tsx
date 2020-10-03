import React, { useState } from 'react';
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

function createData(name: string, plans: number, risk: 1 | 2 | 3 | 4 | 5, groups: number, budget: number) {
  return { name, plans, risk, groups, budget };
}

const rows = [
  createData('James Sawyer', 1, 1, 2, 4.0),
  createData('Shyam P.', 2, 3, 7, 4.3),
  createData('Ram Pratap', 2, 4, 4, 6.0),
  createData('Harvey Specter', 3, 2, 6, 4.3),
  createData('Mike Ross', 6, 3, 9, 3.9),
  createData('James Sawyer', 1, 5, 2, 4.0),
  createData('Harvey Specter', 3, 2, 6, 4.3),
  createData('Mike Ross', 6, 3, 9, 3.9),
  createData('James Sawyer', 1, 5, 2, 4.0),
];

const Group: React.FC = () => {
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
        <div className="flex cross-start margin-bottom padding-bottom">
          <div style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'var(--accent-shade)' }} className="flex cross-center main-center margin-right--small">
            <span className="pficon-users" />
          </div>
          <span className="font-largest flex fill text-primary bold">Intraday low risk, mid budget</span>
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
                <StyledTableCell>
                  <RiskProfileTag risk={row.risk} />
                </StyledTableCell>
                <StyledTableCell>{row.plans}</StyledTableCell>
                <StyledTableCell>{row.groups}</StyledTableCell>
                <StyledTableCell align="right">{row.budget + ' Lakh'}</StyledTableCell>
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

export default Group;
