import styles from '../input.module.css';

type InputProps = {
  label: string
} & React.HTMLAttributes<HTMLInputElement>

export default function EmailInput({label = 'input', ...props }: InputProps) {
  return (
    <main className={styles.main}>
      <label className={styles.label} htmlFor='input'>{label}</label>
      <div className={styles.container} >
        <input 
          id='input' 
          type='email' 
          {...props} 
        />
      </div>
    </main>
  )
}

