import React from 'react';
import cx from 'classnames';
import styles from './index.module.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextButton from 'src/components/button/text.button';
import { useFormik } from 'formik';
import { authOtpValidateThunk } from 'src/store/auth/thunk';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import StyledInput,{useStyles} from './styled-input';

interface Props {
  mobile: string
}
const OtpValidation: React.FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      mobile: props.mobile,
      otp: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      otp: Yup.string()
        .max(6, 'Must be 20 characters or less')
        .required('Required')
    }),
    onSubmit: values => {
      dispatch(authOtpValidateThunk(values));
    },
  });
  return (
    <>
      <Typography className={classes.bold} variant="h4">Welcome to Protofolio</Typography>
      <Typography className={classes.subHeadline} variant="subtitle1">Enter OTP to continue</Typography>
      <form className={styles.authForm} onSubmit={formik.handleSubmit}>
        <div className={styles.shadedContainer}>
          <span className={cx(styles.shadedBck, 'pficon-shaded')} />
          <span className="pficon-mobile" />
          <span className="bold">{props.mobile}</span>
        </div>
        <Typography className={classes.sandwitchText} variant="subtitle1">Enter OTP<span className='spacer' /> 4:20</Typography>
        <div className={styles.inputWithIcon}>
          <span className="pficon-lock" />
          <StyledInput
            id="otp"
            name="otp"
            label="OTP"
            variant="filled"
            fullWidth
            type="text"
            inputProps={{ maxLength: 6, className: "no-number-stepper", style: { textTransform: 'uppercase', letterSpacing: 10, fontWeight: 500 } }}
            onChange={formik.handleChange} />
        </div>
        <Button type="submit" className={classes.button} variant="contained" color="primary" size="large" fullWidth>Verify OTP</Button>
        <span style={{ alignSelf: 'center' }}>
          <TextButton variant="text-accent" size="regular" title="Resend OTP" />
        </span>
      </form>
    </>
  )
}

export default OtpValidation;