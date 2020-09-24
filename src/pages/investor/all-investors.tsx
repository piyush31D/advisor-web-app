import React from 'react';
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
import styles from './all-investors.module.css';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color:'var(--text-primary)',
      border: 0,
      padding: '14px 10px',
      '&:first-child': {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
      },
      '&:last-child': {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
      }
    },
    head: {
      backgroundColor: 'var(--table-head-background)',
      color: 'var(--text-primary)',
      padding: '10px',
      fontSize: 'var(--font-regular)'
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
        backgroundColor: 'var(--table-cell-background)',
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
  createData('Mike Ross', 6, 'Moderate', 9, 3.9),
  createData('James Sawyer', 1, 'Low', 2, 4.0),
  createData('Shyam P.', 2, 'Mod. Low', 7, 4.3),
  createData('Ram Pratap', 2, 'High', 4, 6.0),
  createData('Harvey Specter', 3, 'Mod. High', 6, 4.3),
  createData('Mike Ross', 6, 'Moderate', 9, 3.9),
  createData('James Sawyer', 1, 'Low', 2, 4.0),
  createData('Shyam P.', 2, 'Mod. Low', 7, 4.3),
  createData('Ram Pratap', 2, 'High', 4, 6.0),
  createData('Harvey Specter', 3, 'Mod. High', 6, 4.3),
  createData('Mike Ross', 6, 'Moderate', 9, 3.9),
  createData('James Sawyer', 1, 'Low', 2, 4.0),
  createData('Shyam P.', 2, 'Mod. Low', 7, 4.3),
  createData('Ram Pratap', 2, 'High', 4, 6.0),
  createData('Harvey Specter', 3, 'Mod. High', 6, 4.3),
  createData('Mike Ross', 6, 'Moderate', 9, 3.9),
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
  },
  semiBold:{
    fontWeight: 500
  }
});

const AllInvestors: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={styles.header}>
        <div className="flex row-flex cross-center margin-bottom">
          <span className="font-large text-primary bold">All Investors</span>
        </div>
        <div className="flex row-flex cross-center">
          {false &&<span className="font-regular text-primary margin-right"><i className={cx('pficon-users', styles.iconMargin)} />70</span>}
          {true && <span className="semi-bold text-primary">14 Selected</span>}
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
                  <InvestorAvatar style={{ backgroundColor:false? "#" + ((1 << 24) * Math.random() | 0).toString(16) :'var(--border)'}} alt={row.name} />
                </StyledTableCell>
                <StyledTableCell className={classes.semiBold} scope="row">
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

export default AllInvestors;
