import styles from './auth.style.module.css'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>{children}</div>
  )
}
