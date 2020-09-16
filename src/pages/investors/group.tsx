import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import TextButton from 'src/components/button/text.button';
import Tag from 'src/components/tag/tag';
import styles from './all-investors.module.css';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 0,
      padding: '16px 10px',
      '&:first-child': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
      },
      '&:last-child': {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
      }
    },
    head: {
      backgroundColor: '#E8EEF2',
      color: 'var(--text-primary)',
      padding: '10px',
      fontSize: 'var(--font-medium)'
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: '#FAFAFB',
      },
    },
  }),
)(TableRow);

const InvestorAvatar = withStyles(() =>
  createStyles({
    root: {
      height: 24,
      width: 24,
      fontSize: '1rem',
      lineHeight: 2
    },
  }),
)(Avatar);

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
  createData('Shyam P.', 2, 'Mod. Low', 7, 4.3),
  createData('Ram Pratap', 2, 'High', 4, 6.0),
  createData('Harvey Specter', 3, 'Mod. High', 6, 4.3), 
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
  avatarCell: {
    width: '1%',
    padding: '4px 0'
  },
  checkboxCell: {
    padding: '0 4px',
    width: '1%'
  }
});

const Group: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={styles.header}>
        <div className="flex row-flex cross-center margin-bottom">
          <span className="font-large flex fill text-primary bold">Intraday low risk, mid budget</span>
          <TextButton size="regular" type="text-accent" icon="plus" title="Add user"></TextButton>
        </div>
        <div className="flex row-flex cross-center margin-bottom">
          <div className="flex fill row-flex">
            <Tag color="yellow" icon="meter" size="regular" title="Conservative" />
            <Tag color="green" icon="rupee" size="regular" title="0 - 1L" />
            <TextButton size="regular" type="text-accent" icon="settings"></TextButton>
          </div>
          <TextButton size="regular" type="text-primary" icon="folio" title="5 folios"></TextButton>
        </div>
        {true && <span className="text-primary">4 Selected</span>}
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
                  <InvestorAvatar style={{ backgroundColor: false ? "#" + ((1 << 24) * Math.random() | 0).toString(16) : '#e2e2e2' }} alt={row.name} />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.plans}</StyledTableCell>
                <StyledTableCell>{row.risk}</StyledTableCell>
                <StyledTableCell>{row.groups}</StyledTableCell>
                <StyledTableCell align="right">{row.budget + ' Lakh'}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Group;
