import styles from '../input.module.css';

type InputProps = {
  label: string
} & React.HTMLAttributes<HTMLInputElement>

export default function NumberInput({label = 'input', ...props }: InputProps) {
  return (
    <main className={styles.main}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <div className={styles.container} >
        <input 
          id={label} 
          type='number' 
          {...props} 
        />
      </div>
    </main>
  )
}

