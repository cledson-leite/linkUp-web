import React from 'react';

import LoginForm from '@/app/component/organism/LoginForm';

import styles from './LoginTemplate.module.css';

const LoginTemplate: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.appName}>LinkUp</div>
      <div className={styles.card}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginTemplate; 