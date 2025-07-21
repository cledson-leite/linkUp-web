import styles from '../input.module.css';

type InputProps = {
  label: string,
  error?: string;
} & React.HTMLAttributes<HTMLInputElement>

export default function DefaultInput({ label = 'input', className, error, ...props }: InputProps) {
  return (
    <main className={`${styles.main} ${ className }`}>
      <label className={`${styles.label} ${ className }`} htmlFor={label}>{label}</label>
      <div className={`${styles.container} ${ className }`} >
        <input 
          id={label} 
          type='text'
          {...props} 
        />
        {error && <p className={styles.error}>{error}</p>}
        </div>
    </main>
  )
}
