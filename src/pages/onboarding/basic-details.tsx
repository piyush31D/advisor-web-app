import styles from './index.module.css'
import React from 'react';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { createProfileThunk } from 'src/store/profile/thunk';
import * as Yup from 'yup';
import StyledInput, { useStyles } from './styled-input';
import TextButton from 'src/components/button/text.button';

const BasicDetails: React.FC<{ mobile: string }> = ({ mobile }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      mobile: mobile,
      email: '',
      pan: '',
      individualDetails: {
        firstName: '',
        lastName: ''
      }
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .max(10, 'Must be 10 characters')
        .required('Required'),
      email: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      pan: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      individualDetails: Yup.object({
        firstName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })
    }),
    onSubmit: values => {
      dispatch(createProfileThunk(values));
    },
  });

  return (
    <>
      <Typography className={classes.headline} variant="h5">Basic Information</Typography>
      <form className={styles.authForm} onSubmit={formik.handleSubmit}>
        <Typography className={classes.inputlabel} variant="subtitle1">Enter your Email (Verification required)*</Typography>
        <div className={styles.inputWithIcon} style={{ marginBottom: 5 }}>
          <span className="pficon-email" />
          <StyledInput
            type="text"
            id="email"
            name="email"
            label="Email"
            variant="filled"
            fullWidth
            onChange={formik.handleChange}
          />
        </div>
        {/* <div className={styles.inputWithIcon} style={{ marginBottom: 5, marginTop: 10 }}>
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
        </div> */}
        <div className='margin-bottom flex margin-left margin-right space-between'>
          <span className="flex cross-baseline">
            {/* <TextButton variant="text-accent" size="regular" title="Send OTP" /> */}
            {/* <span className="margin-left">4:20</span> */}
          </span>
          {/* <span>
            <TextButton variant="text-accent" size="regular" title="Resend OTP" />
          </span> */}
        </div>
        <Typography className={cx(classes.inputlabel, classes.smallgutter)} variant="subtitle1">Enter Name as on PAN Card*</Typography>
        <div className={styles.inputWithIcon}>
          <span className="pficon-advisor" />
          <StyledInput
            type="text"
            id="firstName"
            name="individualDetails.firstName"
            label="First Name"
            variant="filled"
            fullWidth
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-advisor" />
          <StyledInput
            type="text"
            id="lastName"
            name="individualDetails.lastName"
            label="Last Name"
            variant="filled"
            fullWidth
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.inputWithIcon}>
          <span className="pficon-id" />
          <StyledInput
            type="text"
            id="pan"
            name="pan"
            label="Enter PAN"
            variant="filled"
            fullWidth
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex main-center">
          <TextButton type="submit" variant="text-accent" size="regular" title="Next" />
        </div>
      </form>
    </>
  )
}

export default BasicDetails;