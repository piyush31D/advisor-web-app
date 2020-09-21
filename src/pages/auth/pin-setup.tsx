import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import cx from 'classnames';
import styles from './index.module.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useInputStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&$focused': {
        backgroundColor: 'transparent',
      }
    },
    focused: {},
  }),
);

function StyledInput(props: TextFieldProps) {
  const classes = useInputStyles();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
}

const useStyles = makeStyles({
  bold: {
    fontWeight: 'bold',
  },
  subHeadline: {
    fontSize: 16,
    paddingTop: 10
  },
  sandwitchText: {
    margin: '0 0 15px 0'
  },
  button: {
    borderRadius: 15,
    fontSize: 16,
    padding: '12px 0',
    margin: '5px 0 20px 0'
  },
  smallgutter: {
    marginTop: 30
  }
});


const PinSetup: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Sign up</Typography>
      <form className={cx(styles.authForm, classes.smallgutter)}>
        <div className={styles.shadedContainer}>
          <span className={cx(styles.shadedBck, 'pficon-shaded')} />
          <span className="pficon-mobile" />
          <span className="bold">7295084005</span>
        </div>
        <Typography className={classes.sandwitchText} variant="subtitle1">Setup PIN</Typography>
        <div className={styles.inputWithIcon}>
          <span className="pficon-lock" />
          <StyledInput type="password" id="mobile" label="Enter PIN" variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-lock" />
          <StyledInput type="password" id="pin" label="Confirm PIN" variant="filled" fullWidth />
        </div>
        <Button className={classes.button} variant="contained" color="primary" size="large" fullWidth>Next</Button>
      </form>
    </>
  )
}

export default PinSetup;