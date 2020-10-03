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
import Slider from '@material-ui/core/Slider';
import TextButton from 'src/components/button/text.button';
import styles from './investor-filter.module.css';

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
        backgroundColor:'var(--table-cell-background)',
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

function createData(name: string, average: number, quantity: number[], pnl: number, risk: number) {
  return { name, average, quantity, pnl, risk };
}

const rows = [
  createData('James Sawyer', 12.4, [10, 12], 2, 1),
  createData('Shyam P.', 12.4, [11, 14], 7, 3),
  createData('Ram Pratap', 10.2, [10, 12], 4, 2),
  createData('Harvey Specter', 11, [10, 12], 6, 5),
  createData('Mike Ross', 12.4, [11, 14], 9, 2),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
    padding: '0 10px'
  },
  avatarCell: {
    width: '1%',
    padding: '4px 0'
  },
  checkboxCell: {
    padding: '0 4px',
    width: '1%',
  },
  semiBold: {
    fontWeight: 500
  },
  positionRelative:{
    position: 'relative',
  }
});

const valuetext = (value: number) => `${value}°C`;

const RangeSlider: React.FC<{ varient: string }> = ({ varient }) => {
  const [value, setValue] = React.useState<number[] | Array<number>>([20.50, 30.40]);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleLeftInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)
    if (inputValue < 0) {
      setValue([0, value[1]]);
    }
    else if (inputValue > value[1]) {
      setValue([value[1], value[1]]);
    }
    else if (inputValue > 100) {
      setValue([100, value[1]]);
    }
    else setValue([inputValue, value[1]]);
  };

  const handleRightInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)
    if (inputValue < value[0]) {
      setValue([value[0], value[0]]);
    }
    else if (inputValue < 0) {
      setValue([value[0], 0]);
    }
    else if (inputValue > 100) {
      setValue([value[0], 100]);
    }
    else setValue([value[0], inputValue]);
  };

  return (
    <div className="flex col-flex">
      <div className={styles.rangeSliderWrap}>
        <div className={styles.rangeInputWrap}>
          <input type="number" onChange={handleLeftInputChange} value={value[0]} className={cx(styles.textRight, styles.noStepper)} />
          <span className={cx(styles.rangeIcon, 'pficon-range-' + varient,styles['rangeIcon'+varient])} />
          <input type="number" onChange={handleRightInputChange} value={value[1]} className={styles.noStepper} />
        </div>
        <div className={styles.rangeSlider}>
          <Slider
            min={0}
            step={0.1}
            max={100}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </div>
      </div>
      <div className="flex space-between margin-bottom">
        <span className={styles.rangeFrom}>{`${varient === 'price' ? '₹' : ''}0${varient === 'quantity' ? '%' : ''}`}</span>
        <span className={styles.rangeTo}>{`${varient === 'price' ? '₹' : ''}100${varient === 'quantity' ? '%' : ''}`}</span>
      </div>
    </div>
  );
}
const InvestorFilter: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={styles.filterHeader}>
        <div className="flex">
          <RangeSlider varient="price" />
          <span className="margin-right margin-left spacer" />
          <RangeSlider varient="quantity" />
        </div>
        <div className="flex row-flex cross-center">
          <div className="flex fill row-flex cross-center">
            <TextButton size="regular" variant="text-accent" title="Keep" />
            <TextButton size="regular" variant="text-accent" title="Remove" />
          </div>
        </div>
      </div>
      <TableContainer className={styles.investorTableWrap}>
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
              <StyledTableCell>Investor</StyledTableCell>
              <StyledTableCell>Avg. price</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>P&L</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell className={cx(classes.checkboxCell,classes.positionRelative)}>
                  <div className={styles.riskIndicator} />
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
                <StyledTableCell>₹{row.average}</StyledTableCell>
                <StyledTableCell>
                  <span>
                    <span>{row.quantity[0]}</span>
                    <span className="pficon-dot" />
                    <span>{row.quantity[1]}%</span>
                  </span>
                </StyledTableCell>
                <StyledTableCell>{row.pnl}%</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InvestorFilter;
