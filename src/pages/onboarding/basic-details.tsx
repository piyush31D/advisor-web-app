import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import cx from 'classnames';
import styles from './index.module.css'
import Typography from '@material-ui/core/Typography';
import TextButton from 'src/components/button/text.button'

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
  headline: {
    fontWeight: 'bold',
    alignSelf: 'stretch',
    borderBottom: '1px solid var(--border)',
    padding: '30px 80px 20px 80px',
    textAlign: 'center'
  },
  subHeadline: {
    fontSize: 16,
    paddingTop: 10
  },
  inputlabel: {
    margin: '10px 15px'
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

const BasicDetails: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.headline} variant="h5">Basic Information</Typography>
      <form className={styles.authForm}>
        <Typography className={classes.inputlabel} variant="subtitle1">Enter your Email (Verification required)*</Typography>
        <div className={styles.inputWithIcon} style={{ marginBottom: 5 }}>
          <span className="pficon-email" />
          <StyledInput type="text" id="mobile" label="Email" variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon} style={{ marginBottom: 5, marginTop: 10 }}>
          <span className="pficon-lock" />
          <StyledInput
            id="otp"
            name="otp"
            label="OTP"
            variant="filled"
            fullWidth
            type="text"
            inputProps={{ maxLength: 6, className: "no-number-stepper", style: { textTransform: 'uppercase', letterSpacing: 10, fontWeight: 500 } }}
          />
        </div>
        <div className='margin-bottom flex margin-left margin-right space-between'>
          <span className="flex cross-baseline">
            <TextButton type="text-accent" size="regular" title="Verify" />
            <span className="margin-left">4:20</span>
          </span>
          <span>
            <TextButton type="text-accent" size="regular" title="Resend OTP" />
          </span>
        </div>
        <Typography className={cx(classes.inputlabel, classes.smallgutter)} variant="subtitle1">Enter Name as on PAN Card*</Typography>
        <div className={styles.inputWithIcon}>
          <span className="pficon-advisor" />
          <StyledInput type="text" id="pin" label="First Name" variant="filled" fullWidth />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-advisor" />
          <StyledInput type="text" id="pin" label="Last Name" variant="filled" fullWidth />
        </div>
      </form>
    </>
  )
}

export default BasicDetails;