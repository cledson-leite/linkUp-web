import styles from './button.module.css';

export default function Button({onClick, label='Button'}: {onClick?: () => void, label?: string}) {
  return (
    <main className={styles.container} onClick={onClick}>{label}</main>
  )
}
