'use client'

import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa6"

import styles from '../input.module.css';

type InputProps = {
  label: string
} & React.HTMLAttributes<HTMLInputElement>

export default function PasswordInput({ label = 'input', ...props }: InputProps) {
  const [obscureText, setObscureText] = useState(true);
  return (
    <main className={styles.main}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <div className={styles.container} >
        <input 
          id={label}
          type={obscureText ? 'password' : 'text'} 
          {...props} 
        />
        <div className={styles.icon} onClick={() => setObscureText(!obscureText)}>
          {obscureText ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
        </div>
      </div>
    </main>
  )
}
