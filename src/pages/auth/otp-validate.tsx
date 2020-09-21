import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import styles from './index.module.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const StyledInput: React.FC<TextFieldProps> = (props) => {
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

const OtpValidation: React.FC = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      mobile: '',
      otp: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      otp: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Enter OTP to continue</Typography>
      <form className={styles.authForm}>
        <div className={styles.inputWithIcon}>
          <span className="pficon-mobile" />
          <StyledInput
            id="mobile"
            name="mobile"
            label="Mobile No."
            variant="filled"
            fullWidth
            onChange={formik.handleChange} />
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

export default OtpValidation;