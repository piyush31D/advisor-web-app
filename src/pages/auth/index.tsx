import React from 'react';
import styles from './index.module.css';
import OtpValidate from './otp-validate';
import OtpGenerate from './otp-generate';
import { useSelector } from 'react-redux';
import { IState } from 'src/store';
import PinSetup from './pin-setup';
import PinValidation from './pin-valdiate';

const AuthPage: React.FC = () => {
  const auth = useSelector((state: IState) => state.authReducer);

  const renderContent = () => {
    if (!auth.otpSent) {
      return <OtpGenerate />
    }
    if (auth.otpSent) {
      return <OtpValidate />
    }
    if (auth.otpValidated && !auth.pinExists) {
      return <PinSetup />
    }
    if (auth.otpValidated && auth.pinExists) {
      return <PinValidation />
    }
  }

  return (
    <div className="flex row-flex fill cross-stretch">
      <div className={styles.columnLeft}>
        <div className={styles.authContainer}>
          <div className={styles.logo}>
            <span className='pficon-logo'></span>
          </div>
          {renderContent()}
        </div>
      </div>
      <div style={{ display: 'flex', flex: 5, backgroundColor: 'var(--accent)' }}></div>
    </div>
  );
};

export default AuthPage;
