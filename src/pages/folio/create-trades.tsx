import React, { useState } from 'react';
import cx from 'classnames';
import { useHistory } from 'react-router-dom'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextButton from 'src/components/button/text.button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './create-trades.module.css';
import InvestorFilter from './investor-filter';

function createData(name: string, active: boolean) {
  return { name, active };
}

const scrips = [
  createData('IDEA', true),
  createData('MANAPPURAM AUG 117.5 CE', false),
  createData('GOLDBEES', false),
  createData('TCS', false),
  createData('RCOM', false),
  createData('IDEA', false),
];

const useStyles = makeStyles({
  semiBold: {
    fontWeight: 500
  },
  bold: {
    fontWeight: 700
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputLabel: {
    paddingLeft: 15,
    paddingBottom: 5
  }
});

const StyledInput = withStyles(() =>
  createStyles({
    root: {
      'label + &': {
        marginTop: 5,
      },
      '&:first-child': {
        marginRight: 15
      },
      color: 'inherit',
      fontWeight: 500
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: 'var(--input-background)',
      border: 0,
      fontSize: 'var(--font-regular)',
      padding: '15px',
      height: 'auto',
      color: 'inherit',
      transition: '0.2s',
      '&:focus': {
        backgroundColor: 'var(--input-focused-background)',
      },
      '&:hover': {
        backgroundColor: 'var(--input-focused-background)',
      },
    },
  }),
)(InputBase);

const CreateTrades: React.FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const [transactionType, setTransactionType] = useState('BUY');

  const [value, setValue] = React.useState('DAY');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={styles.modalContainer}>
      <div role="button" onClick={() => history.goBack()} className={styles.modalBackground}></div>
      <div className={styles.modal}>
        <div className={styles.columnLeft}>
          <div className={styles.columnHeader}>
            <Typography className={classes.bold} variant="subtitle1">Folio Name</Typography>
            <div className="flex row-flex cross-center">
              <span className="font-medium text-secondary semi-bold margin-right">NSE</span>
              <span className="font-medium text-secondary semi-bold margin-right">EQUITY</span>
              <span className="font-medium text-secondary semi-bold margin-right">CNC</span>
            </div>
          </div>
          <div className={styles.scripWrap}>
            {scrips.map((scrip) => (
              <div className={cx(styles.scrip, scrip.active && styles.activeScrip)}>
                <Typography className={classes.semiBold} variant="body2">{scrip.name}</Typography>
                <span className="flex space-between">
                  <span>
                    <span>12</span>
                    <span className="pficon-dot" />
                    <span>20%</span>
                  </span>
                  <span>
                    <span className="text-red">₹8.75</span>
                  </span>
                </span>
                <span className="flex space-between">
                  <span>
                    <span className="text-red">-4.2%</span>
                    <span style={{ opacity: .5 }} className={cx('pficon-range', styles.rangeIcon)} />
                    <span className="text-green">+7%</span>
                  </span>
                  <span className="text-red">-0.75</span>
                </span>
                <span className={styles.divider} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.columnMiddle}>
          <InvestorFilter />
        </div>
        <div className={styles.columnRight}>
          <div className={styles.columnHeader}>
            <div className="flex">
              <div className={styles.orderCount}>
                <div className={styles.indicator} />
                <span className="font-regular text-primary semi-bold">
                  12 orders on 4 stocks
                </span>
              </div>
              <TextButton thick size="regular" type="fill-accent" title="Send trades" icon="send"></TextButton>
            </div>
          </div>
          <div className={cx(styles.orderWrap, transactionType === 'BUY' ? styles.buyOrder : styles.sellOrder)}>
            <div className={styles.orderAction}>
              <span className="bold">
                <span className="margin-right">
                  Orders
                </span>
                4 / 5
              </span>
              <div className={styles.orderActionButtons}>
                <TextButton round type="text-white" size="regular" icon="chevron-left" />
                <TextButton round type="text-white" size="regular" icon="chevron-right" />
                <TextButton round type="text-white" size="regular" icon="delete" />
                <TextButton round type="text-white" size="regular" icon="plus" />
              </div>
            </div>
            <div className={styles.orderSummary}>
              <span className="flex fill space-between padding-bottom">
                <span>
                  <span className="margin-right">To Qty:</span>
                  <span>10%</span>
                  <span className={cx(styles.rangeIcon, 'pficon-range-quantity')} />
                  <span>10.5%</span>
                </span>
                <span>
                  <span>Price:</span>
                  <span className="semi-bold margin-left">Market</span>
                </span>
              </span>
              <div className="flex space-between cross-center margin-top">
                <div onClick={() => setTransactionType(transactionType === 'BUY' ? 'SELL' : 'BUY')} className={styles.transactionSwitch}>
                  <div style={{ transform: transactionType === 'BUY' ? 'translateX(0)' : 'translateX(22px)', backgroundColor: transactionType === 'BUY' ? 'var(--accent)' : 'var(--text-red)' }} />
                  <p role="button" className={transactionType === 'SELL' ? styles.sellActive : ''}>B</p>
                  <p role="button" className={transactionType === 'BUY' ? styles.buyActive : ''}>S</p>
                </div>
                <span className="flex fill cross-center main-end">
                  <span>Margin</span>
                  <span className="semi-bold margin-left">₹8.75</span>
                  <TextButton type="text-white" size="regular" icon="reload" />
                </span>
                <span className="spacer"/>
                <span className="margin-left">
                  <span>LTP</span>
                  <span className="semi-bold margin-left">₹8.75</span>
                </span>
              </div>
              {/* <span style={{ paddingTop: 15 }} className="flex fill space-between">
                <span>
                  <span>12%</span>
                  <span className={cx(styles.rangeIcon, 'pficon-range-quantity')} />
                  <span className="margin-right">12.5%</span>
                  <span className="pficon-arrow-right font-regular margin-right" />
                  <span>10%</span>
                  <span className={cx(styles.rangeIcon, 'pficon-range-quantity')} />
                  <span>10.5%</span>
                </span>
              </span> */}

            </div>

            <div className={styles.radioWrap}>
              <div>
                <FormControl component="fieldset">
                  <RadioGroup className={classes.rowFlex} aria-label="validity" name="validity" value={value} onChange={handleChange}>
                    <FormControlLabel value="DAY" control={<Radio />} label="DAY" />
                    <FormControlLabel value="IOC" control={<Radio />} label="IOC" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div style={{ marginRight: -15 }}>
                <FormControl component="fieldset">
                  <RadioGroup className={classes.rowFlex} aria-label="complexity" name="complexity" value={value} onChange={handleChange}>
                    <FormControlLabel value="RGLR" control={<Radio />} label="RGLR" />
                    <FormControlLabel value="BO" control={<Radio />} label="BO" />
                    <FormControlLabel value="CO" control={<Radio />} label="CO" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className={styles.radioWrap}>
              <div>
                <FormControl component="fieldset">
                  <RadioGroup className={classes.rowFlex} aria-label="type" name="type" value={value} onChange={handleChange}>
                    <FormControlLabel value="MARKET" control={<Radio />} label="MARKET" />
                    <FormControlLabel value="LIMIT" control={<Radio />} label="LIMIT" />
                    <FormControlLabel value="SL" control={<Radio />} label="SL" />
                    <FormControlLabel value="SL-M" control={<Radio />} label="SL-M" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className={styles.inputsWrap}>
              <div className="flex margin-bottom">
                <div className={cx(styles.imputCol, "margin-right")}>
                  <Typography className={classes.inputLabel} variant="body2">Qty</Typography>
                  <StyledInput type="number" defaultValue="0" id="quantity" />
                </div>
                <div className={styles.imputCol}>
                  <Typography className={classes.inputLabel} variant="body2">Price</Typography>
                  <StyledInput type="number" defaultValue="0" id="quantity" />
                </div>
              </div>
              <div className="flex margin-bottom">
                <div className={cx(styles.imputCol, "margin-right")}>
                  <Typography className={classes.inputLabel} variant="body2">Stoploss</Typography>
                  <StyledInput type="number" defaultValue="0" id="quantity" />
                </div>
                <div className={styles.imputCol}>
                  <Typography className={classes.inputLabel} variant="body2">Target</Typography>
                  {true ? <div className={styles.disabledInput}>
                    <span className={cx(styles.shadedBck, 'pficon-shaded')} />
                    -
                  </div>
                    : <StyledInput type="number" defaultValue="0" id="quantity" />}
                </div>
              </div>
              <div className="flex">
                <div className={cx(styles.imputCol, "margin-right")}>
                  <Typography className={classes.inputLabel} variant="body2">Trailing SL</Typography>
                  <StyledInput type="number" defaultValue="0" id="quantity" />
                </div>
                <div className={styles.imputCol}>
                  <Typography className={classes.inputLabel} variant="body2">Disclosed Qty</Typography>
                  <StyledInput type="number" defaultValue="0" id="quantity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrades;
