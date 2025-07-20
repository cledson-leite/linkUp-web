'use client'

import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa6"

import styles from '../input.module.css';

type InputProps = {
  label: string
} & React.HTMLAttributes<HTMLInputElement>

export default function PasswordInput({ label = 'input', ...props }: InputProps) {
  const [obscureText, setObscureText] = useState(false);
  return (
    <main className={styles.main}>
      <label className={styles.label} htmlFor='input'>{label}</label>
      <div className={styles.container} >
        <input 
          id='input' 
          type={obscureText ? 'password' : 'text'} 
          {...props} 
        />
        <div className={styles.icon} onClick={() => setObscureText(!obscureText)}>
          {obscureText ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
        </div>
      </div>
    </main>
  )
}
