import React, { useState } from 'react';
import cx from 'classnames';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TextButton from 'src/components/button/text.button';
import Popover from '@material-ui/core/Popover';
import styles from './edit-folio.module.css';
import folioStyles from './folio.module.css';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '25%',
      whiteSpace: 'nowrap',
      border: 0,
      padding: '12px 10px',
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
      backgroundColor: 'var(--background-primary)',
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

function createData(name: string, price: number, currentQuantity: number[], newQuantity: number[], locked: boolean, state: string) {
  return { name, price, currentQuantity, newQuantity, locked, state };
}

const scrips = [
  createData('IDEA', 8.20, [20, 12.3], [2, 12.3], false, 'NEW'),
  createData('MANAPPURAM AUG 117.5 CE', 1248.5, [1, 20.67], [1, 20.67], true, 'NEW'),
  createData('GOLDBEES', 110.30, [2, 12.3], [2, 12.3], false, 'MODIFIED'),
  createData('TCS', 1207.50, [1, 20.2], [1, 20.2], true, 'UNCHANGED'),
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
    fontWeight: 500
  },
  bold: {
    fontWeight: 700
  },
  rowDivider: {
    padding: '3px 0'
  },
  line2: {
    paddingTop: 3
  },
  noWhiteSpace: {
    width: '1%',
  },
});

const EditFolio: React.FC = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className={folioStyles.header}>
        <div className="flex row-flex cross-center" style={{ marginBottom: 15 }}>
          <span className="font-large flex fill text-primary bold">Folio Name</span>
        </div>
        <div className="flex row-flex cross-center" style={{ marginBottom: 5 }}>
          <div className="flex fill row-flex cross-center">
            <span aria-describedby={id} className={styles.scripSearch} onClick={handleClick}>
              <span className="pficon-search margin-right" />
              <span>Search and add Stocks</span>
            </span>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              elevation={8}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >

              <div className={styles.scripSearchPopover}>
                <input autoFocus aria-describedby={id} placeholder="Search and add Stocks" type="text" className={styles.scripSearchInput} />
                <span className={styles.divider}></span>
                <div className={styles.scripSearched}>
                  <span className="text-primary">IDEA</span>
                  <span className="text-accent">NSE</span>
                </div>
                <div className={styles.scripSearched}>
                  <span className="text-primary">IDEA</span>
                  <span className="text-accent">NSE</span>
                </div>
                <div className={styles.scripSearched}>
                  <span className="text-primary">IDEA</span>
                  <span className="text-accent">NSE</span>
                </div>
              </div>
            </Popover>
            <span className="semi-bold font-regular text-primary">20 Stocks</span>
            <div className={cx(styles.scriptState, styles.stateNew)} />
            <span className="font-regular semi-bold text-secondary">5 New</span>
            <div className={cx(styles.scriptState, styles.stateModified)} />
            <span className="font-regular semi-bold text-secondary">2 Modified</span>
          </div>
          <TextButton thick size="regular" variant="text-red" icon="reset" title="Reset changes"></TextButton>
          <span className="spacer"></span>
          <TextButton thick size="regular" variant="fill-accent" title="Save changes"></TextButton>
        </div>
      </div>
      <div className={folioStyles.scripsWrap}>
        <TableContainer className={folioStyles.tableWrap}>
          <Table stickyHeader className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <div className={cx(folioStyles.tableCell, folioStyles.noBorder)}>
                    Stock
                  </div>
                </StyledTableCell>
                <StyledTableCell>LTP</StyledTableCell>
                <StyledTableCell>Current Qty.</StyledTableCell>
                <StyledTableCell>
                  <span className="flex main-center" style={{ paddingRight: 120 }}>
                    New Qty.
                  </span>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell className={classes.rowDivider} colSpan={4} />
              </StyledTableRow>
              {scrips.map((scrip) => (
                <>
                  <StyledTableRow key={scrip.name}>
                    <StyledTableCell className={classes.semiBold} scope="row">
                      <div className={folioStyles.tableCell}>
                        <div className={cx(styles.stateIndicator, scrip.state === 'NEW' ? styles.stateNew : scrip.state === 'MODIFIED' ? styles.stateModified : '')} />
                        <Typography className={classes.semiBold} variant="subtitle1">{scrip.name}</Typography>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell className={classes.noWhiteSpace}>
                      <span className="text-primary">{`₹${scrip.price}`}</span>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography className={cx(classes.semiBold, classes.line2)} variant="body2">
                        <span>{scrip.currentQuantity[0]}</span>
                        <span className="pficon-dot" />
                        <span>{`${scrip.currentQuantity[1]}%`}</span>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell className={cx(classes.noWhiteSpace)}>
                      <div className={styles.qtyInputWrap}>
                        <input name={`${scrip.name}-quantity`} type="number" className={cx(styles.qtyInputLeft, 'no-number-stepper')} />
                        <span className={cx(styles.rangeIcon, 'pficon-dot')} />
                        <input name={`${scrip.name}-weight`} type="number" className={cx(styles.qtyInputRight, 'no-number-stepper')} />
                        <span style={{ marginLeft: -18, marginRight: 8 }}>%</span>
                        <div className={styles.actionButtonWrap}>
                          <TextButton size="regular" variant={scrip.locked ? 'text-accent' : 'text-grey'} icon={scrip.locked ? 'locked' : 'unlocked'} />
                          <span className="spacer margin-right" />
                          <TextButton size="regular" variant="text-red" icon="reset" />
                          <TextButton size="regular" variant="text-red" icon="delete" />
                        </div>
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

export default EditFolio;
