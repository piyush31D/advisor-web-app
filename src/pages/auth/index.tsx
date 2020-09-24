import React from 'react';
import styles from './index.module.css';
import OtpValidate from './otp-validate';
import OtpGenerate from './otp-generate';
import { useSelector } from 'react-redux';
import { IState } from 'src/store/config';
import PinSetup from './pin-setup';
import PinValidation from './pin-valdiate';

const AuthPage: React.FC = () => {
  const auth = useSelector((state: IState) => state.authReducer);

  const renderContent = () => {
    if (!auth.mobile) {
      return <OtpGenerate />
    }
    if (auth.mobile && auth.otpSent) {
      return <OtpValidate mobile={auth.mobile} />
    }
    if (auth.mobile && auth.pinToken && !auth.pinExists) {
      return <PinSetup mobile={auth.mobile} pinToken={auth.pinToken}/>
    }
    if (auth.mobile && auth.pinToken && auth.pinExists) {
      return <PinValidation mobile={auth.mobile} pinToken={auth.pinToken}/>
    }
  }

  return (
    <div className="flex row-flex fill cross-stretch">
      <div className={styles.columnLeft}>
        <div className={styles.authContainer}>
          <div className={styles.logo}>
            <span className='pficon-logo-2'></span>
          </div>
          {renderContent()}
        </div>
      </div>
      <div style={{ display: 'flex', flex: 5, backgroundColor: 'var(--accent)' }}></div>
    </div>
  );
};

export default AuthPage;
