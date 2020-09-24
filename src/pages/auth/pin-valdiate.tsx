import React from 'react';
import cx from 'classnames';
import styles from './index.module.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StyledInput, { useStyles } from './styled-input';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authPinValidateThunk } from 'src/store/auth/thunk';

interface Props {
  mobile: string
  pinToken:string
}

const PinValidation: React.FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      mobile: props.mobile,
      pin: '',
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
      dispatch(authPinValidateThunk({ mobile: values.mobile, pin: values.pin,pinToken:props.pinToken }));
    },
  });
  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Sign in as an advisor</Typography>
      <form className={styles.authForm} onSubmit={formik.handleSubmit}>
        <div className={styles.shadedContainer}>
          <span className={cx(styles.shadedBck, 'pficon-shaded')} />
          <span className="pficon-mobile" />
          <span className="bold">{props.mobile}</span>
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-lock" />
          <StyledInput id="pin" name="pin" onChange={formik.handleChange} type="password" label="Enter PIN" variant="filled" fullWidth />
        </div>
        <Button type="submit" className={classes.button} variant="contained" color="primary" size="large" fullWidth>Sign in</Button>
        <Typography className={classes.bold} color="primary" variant="subtitle1">Forgot PIN?</Typography>
      </form>
    </>
  )
}

export default PinValidation;