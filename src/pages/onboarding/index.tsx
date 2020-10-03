import styles from './index.module.css'
import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'src/store/config';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import { getProfileThunk } from 'src/store/profile/thunk';
import BasicDetails from './basic-details';
import StyledInput, { useStyles } from './styled-input'
import Button from '@material-ui/core/Button';

const AdvisorOnboarding: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { mobile } = useSelector((state: IState) => state.authReducer);
  const { fetching } = useSelector((state: IState) => state.profileReducer)

  const initFetch = useCallback(() => {
    dispatch(getProfileThunk())
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  if (fetching) {
    return (
      <div>loading...</div>
    )
  }
  return (
    <>
      <div className={styles.columnLeft}>
        <div className={styles.logo}>
          <span className='pficon-logo-2'></span>
        </div>
        <Typography className={classes.subHeadline} variant="subtitle1">Complete Account Setup</Typography>
        <div className={styles.container}>
          <div className={styles.shadedContainer}>
            <span className={cx(styles.shadedBck, 'pficon-shaded')} />
            <span className="pficon-mobile" />
            <span className="bold">7295084005</span>
          </div>
          <div className={styles.stepWrap}>
            <div className={styles.stepperLine}></div>
            <div className={cx(styles.step, styles.stepExpanded)}>
              <div className={cx(styles.stepHeader, 'margin-bottom')}>
                <div className={styles.progressIndicator}>
                  <div className={styles.indicatorInset}></div>
                  <div className={styles.indicatorMark}></div>
                </div>
                <span className={styles.stepName}>Basic Information</span>
                {/* <span className="pficon-chevron-down font-large" /> */}
              </div>
              <div className={styles.subStepWrap}>
                <div className={styles.subStep}>
                  <div className={styles.subIndicator}>
                    <span className="pficon-circle" />
                  </div>
                  <span className={styles.subStepName}>Email</span>
                  <span style={{ color: 'var(--orange)' }}>OTP Sent</span>
                </div>
                <div className={styles.subStep}>
                  <div className={styles.subIndicator}>
                    <span className="pficon-circle" />
                  </div>
                  <span className={styles.subStepName}>First Name</span>
                  <span />
                </div>
                <div className={styles.subStep}>
                  <div className={styles.subIndicator}>
                    <span className="pficon-circle" />
                  </div>
                  <span className={styles.subStepName}>Last Name</span>
                  <span />
                </div>
              </div>
            </div>
            <div className={cx(styles.step)}>
              <div className={styles.stepHeader}>
                <div className={styles.progressIndicator}>
                  <div className={styles.indicatorInset}></div>
                  <div className={styles.indicatorMark} style={{ top: 0 }}>
                    <span className="pficon-check" />
                  </div>
                </div>
                <span className={styles.stepName}>Identity Verification</span>
                <span className="pficon-chevron-down font-large" />
              </div>
              <div className={styles.subStep}></div>
            </div>
            <div className={cx(styles.step)}>
              <div className={styles.stepHeader}>
                <div className={styles.progressIndicator}>
                  <div className={styles.indicatorInset}></div>
                  <div className={styles.indicatorMark} style={{ top: '100%' }}></div>
                </div>
                <span className={styles.stepName}>Professional Info</span>
                <span className="pficon-chevron-down font-large" />
              </div>
              <div className={styles.subStep}></div>
            </div>
            <Button type="submit" className={classes.button} variant="contained" color="primary" size="large" fullWidth>Complete</Button>
          </div>
        </div>
      </div>
      <div className={styles.columnRight}>
        {mobile && <BasicDetails mobile={mobile} />}
      </div>
    </>
  )
}

export default AdvisorOnboarding;