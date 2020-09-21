import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import styles from './index.module.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { mobile } from 'src/utils/regex';
import { authOtpGenerateThunk } from 'src/store/auth/thunk';
import { useDispatch } from 'react-redux';

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

const OtpGenerate: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      mobile: ''
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .matches(mobile)
        .required('Required')
    }),
    onSubmit: values => {
      dispatch(authOtpGenerateThunk(values));
    },
  });
  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Enter Mobile to continue</Typography>
      <form className={styles.authForm} onSubmit={formik.handleSubmit}>
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
        <Button className={classes.button} type="submit" variant="contained" color="primary" size="large" fullWidth>Send OTP</Button>
      </form>
    </>
  )
}

export default OtpGenerate;