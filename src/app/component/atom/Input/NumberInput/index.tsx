import { InputProps } from '..';
import styles from '../input.module.css';

export default function NumberInput({label = 'input', error,...props }: InputProps) {
  return (
    <main className={styles.main}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <div className={styles.container} >
        <input 
          id={label} 
          type='number' 
          {...props} 
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </main>
  )
}

