import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, error, placeholder, ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input {...props} className={styles.input} placeholder={placeholder} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input; 