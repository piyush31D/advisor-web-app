import React from 'react';
import cx from 'classnames';
import styles from './index.module.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { authPinSetupThunk } from 'src/store/auth/thunk';
import * as Yup from 'yup';
import StyledInput, { useStyles } from './styled-input';

interface Props {
  mobile: string;
  pinToken:string
}

const PinSetup: React.FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      mobile: props.mobile,
      pin: '',
      pinReEntered: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .max(10, 'Must be 10 characters')
        .required('Required'),
      pin: Yup.string()
        .max(6, 'Must be 6 characters')
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values);
      
      if (values.pin === values.pinReEntered)
        dispatch(authPinSetupThunk({ mobile: values.mobile, pin: values.pin ,pinToken:props.pinToken}));
      else
        console.log('pin did not matched');
    },
  });
  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Sign up</Typography>
      <form className={cx(styles.authForm, classes.smallgutter)} onSubmit={formik.handleSubmit}>
        <div className={styles.shadedContainer}>
          <span className={cx(styles.shadedBck, 'pficon-shaded')} />
          <span className="pficon-mobile" />
          <span className="bold">{props.mobile}</span>
        </div>
        <Typography className={classes.sandwitchText} variant="subtitle1">Setup PIN</Typography>
        <div className={styles.inputWithIcon}>
          <span className="pficon-lock" />
          <StyledInput
            type="password"
            id="pin"
            name="pin"
            label="Confirm PIN"
            variant="filled"
            fullWidth
            inputProps={{maxLength:6}}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-lock" />
          <StyledInput
            type="password"
            id="pinReEntered"
            name="pinReEntered"
            label="Confirm PIN"
            variant="filled"
            fullWidth
            inputProps={{maxLength:6}}
            onChange={formik.handleChange}
          />
        </div>
        <Button type="submit" className={classes.button} variant="contained" color="primary" size="large" fullWidth>Next</Button>
      </form>
    </>
  )
}

export default PinSetup;