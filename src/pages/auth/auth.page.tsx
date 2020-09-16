import React from 'react';
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import cx from 'classnames';
import styles from './auth-page.module.css'
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
  smallgutter:{
    marginTop:30
  }
});

const OtpValidation: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Enter OTP to continue</Typography>
      <form className={styles.authForm}>
        <div className={styles.inputWithIcon}>
          <span className="pficon-mobile" />
          <StyledInput id="mobile" label="Mobile No." variant="filled" fullWidth />
        </div>
        <Typography className={classes.sandwitchText} variant="subtitle1">Enter OTP<span className='spacer' /> 4:20</Typography>
        <div className={styles.otpInputWrap}>
          <div className={styles.otpInputBoxes}>
            <div className={styles.otpInputBox}></div>
            <div className={styles.otpInputBox}></div>
            <div className={styles.otpInputBox}></div>
            <div className={styles.otpInputBox}></div>
            <div className={styles.otpInputBox}></div>
            <div className={styles.otpInputBox}></div>
          </div>
          <div className={styles.optInputFieldWrap}>
            <input className={styles.otpInputField} />
          </div>
        </div>
        <Button className={classes.button} variant="contained" color="primary" size="large" fullWidth>Send OTP</Button>
      </form>
    </>
  )
}

const PinValidation: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Sign in as an advisor</Typography>
      <form className={styles.authForm}>
        <div className={styles.inputWithIcon}>
          <span className="pficon-mobile" />
          <StyledInput type="number" id="mobile" label="Mobile No." variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-lock" />
          <StyledInput type="password" id="pin" label="Enter PIN" variant="filled" fullWidth />
        </div>
        <Button className={classes.button} variant="contained" color="primary" size="large" fullWidth>Sign in</Button>
        <Typography className={classes.bold} color="primary" variant="subtitle1">Forgot PIN?</Typography>
      </form>
    </>
  )
}

const PinSetup: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Sign up</Typography>
      <form className={cx(styles.authForm,classes.smallgutter)}>
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

const BasicDetails: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Sign up</Typography>
      <form className={cx(styles.authForm,classes.smallgutter)}>
        <div className={styles.shadedContainer}>
          <span className={cx(styles.shadedBck, 'pficon-shaded')} />
          <span className="pficon-mobile" />
          <span className="bold">7295084005</span>
        </div>
        <Typography className={classes.sandwitchText} variant="subtitle1">Basic Details</Typography>
        <div className={styles.inputWithIcon}>
          <span className="pficon-email" />
          <StyledInput type="text" id="mobile" label="Email" variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-id" />
          <StyledInput type="text" id="pin" label="Enter PAN" variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-advisor" />
          <StyledInput type="text" id="pin" label="First Name" variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-advisor" />
          <StyledInput type="text" id="pin" label="Last Name" variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-tick-circle" />
          <StyledInput type="text" id="pin" label="SEBI Reg. No." variant="filled" fullWidth />
        </div>
        <Button className={classes.button} variant="contained" color="primary" size="large" fullWidth>Complete</Button>
      </form>
    </>
  )
}

const AuthPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="flex row-flex fill cross-stretch">
      <div className={styles.columnLeft}>
        <div className={styles.authContainer}>
          <div className={styles.logo}>
            <span className='pficon-logo'></span>
          </div>
          <PinSetup />
        </div>
      </div>
      <div style={{ display: 'flex', flex: 5, backgroundColor: 'var(--accent)' }}></div>
    </div>
  );
};

export default AuthPage;
