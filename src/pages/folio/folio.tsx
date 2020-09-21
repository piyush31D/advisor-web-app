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
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextButton from 'src/components/button/text.button';
import Tag from 'src/components/tag/tag';
import styles from './folio.module.css';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width:'25%',
      whiteSpace:'nowrap',
      border: 0,
      padding: '10px 0',
      '&:first-child': {
        paddingLeft: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
      },
      '&:last-child': {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
      }
    },
    head: {
      backgroundColor: '#E8EEF2',
      color: 'var(--text-primary)',
      padding: '10px',
      fontSize: 'var(--font-regular)',
      fontWeight: 400
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
        backgroundColor: 'var(--background-primary)',
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
  createData('IDEA', 1, 'Low', 2, 4.0),
  createData('MANAPPURAM AUG 117.5 CE', 2, 'Mod. Low', 7, 4.3),
  createData('GOLDBEES', 2, 'High', 4, 6.0),
  createData('IDEA', 1, 'Low', 2, 4.0),
  createData('MANAPPURAM AUG 117.5 CE', 2, 'Mod. Low', 7, 4.3),
  
  
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
  semiBold: {
    fontWeight: 600
  },
  bold: {
    fontWeight: 700
  },
  rowDivider: {
    padding: '7px 0'
  },
  line2: {
    paddingTop: 3
  },
  noWhiteSpace: {
    width: '1%',
  },
});

const Folio: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={styles.header}>
        <div className="flex row-flex cross-center" style={{ marginBottom: 15 }}>
          <span className="font-large flex fill text-primary bold">Folio Name</span>
          <Button variant="contained" color="primary">Send Trades</Button>
        </div>
        <div className="flex row-flex cross-center" style={{ marginBottom: 5 }}>
          <div className="flex fill row-flex cross-center">
            <Tag color="blue" size="regular" title="NSE" />
            <Tag color="blue" size="regular" title="CNC" />
            <Tag color="grey" size="regular" title="EQUITY" />
            <TextButton size="regular" type="text-accent" icon="settings"></TextButton>
          </div>
          <span style={{lineHeight:1}} className="margin-right font-regular text-primary semi-bold">17 Stocks</span>
          <TextButton size="regular" type="text-accent" icon="users" title="5 Groups"></TextButton>
        </div>
      </div>
      <div className={styles.scripsWrap}>
        <TableContainer className={styles.tableWrap}>
          <Table stickyHeader className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <div className={cx(styles.tableCell, styles.noBorder)}>
                    Symbol and Core Qty.
                  </div>
                </StyledTableCell>
                <StyledTableCell>P&L Range</StyledTableCell>
                <StyledTableCell colSpan={2}>Avg Price and Qty Range</StyledTableCell>
                <StyledTableCell>Orders</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell className={classes.rowDivider} colSpan={4} />
              </StyledTableRow>
              {rows.map((row) => (
                <>
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className={classes.semiBold} scope="row">
                      <div className={styles.tableCell}>
                        <div className={styles.indicator}/>
                        <Typography className={classes.semiBold} variant="subtitle1">{row.name}</Typography>
                        <Typography className={cx(classes.semiBold, classes.line2)} variant="body2">
                          <span>12</span>
                          <span className="pficon-dot" />
                          <span>20%</span>
                        </Typography>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>
                      <div className={styles.tableCell}>
                        <Typography className={classes.semiBold} variant="subtitle1">
                          <span className="text-red">-4.2%</span>
                          <span className={cx(styles.rangeIcon, 'pficon-range')} />
                          <span className="text-green">+7%</span>
                        </Typography>
                        <Typography className={cx(classes.line2)} variant="subtitle1">
                          <span>LTP</span>
                          <span className="spacer" />
                          <span className="text-red">₹8.75</span>
                        </Typography>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell className={cx(classes.noWhiteSpace)}>
                      <div className={cx(styles.tableCell, styles.noBorder, 'margin-right')}>
                        <span style={{color:'#00C9C3'}} className="pficon-range-price font-large text-accent" />
                        <Typography className={cx(classes.line2)} variant="subtitle1">
                          <span className="text-primary">₹8.50</span>
                          <span className={cx(styles.rangeIcon, 'pficon-range')} />
                          <span className="text-primary">₹10.20</span>
                        </Typography>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell className={classes.noWhiteSpace}>
                      <div className={styles.tableCell}>
                        <span style={{color:'#E1A500'}} className="pficon-range-quantity font-large text-accent" />
                        <Typography className={cx(classes.line2)} variant="subtitle1">
                          <span className="text-primary">8.5%</span>
                          <span className={cx(styles.rangeIcon, 'pficon-range')} />
                          <span className="text-primary">10.2%</span>
                        </Typography>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>
                      <div className={cx(styles.tableCell, styles.noBorder)}>
                        <Typography className={classes.semiBold} variant="subtitle1">
                          <span>12</span>
                          <span className="pficon-dot" />
                          <span>20%</span>
                        </Typography>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell className={classes.rowDivider} colSpan={4} />
                  </StyledTableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Folio;
