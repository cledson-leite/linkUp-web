import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa6'

import styles from './social.module.css'

type SocialButtonProps = {
  variant?: 'google' | 'github' | 'linkedin'
  onClick?: () => void
}

export default function SocialButton({ variant='google', onClick }: SocialButtonProps) {
  return (
    <main className={styles.container} onClick={onClick}>
      {variant === 'google' && <FaGoogle size={24} style={{ color: 'var(--alerta-borda)' }}/>}
      {variant === 'github' && <FaGithub size={24} style={{ color: 'var(--texto-principal)' }}/>}
      {variant === 'linkedin' && <FaLinkedin size={24} style={{ color: 'var(--principal-borda)' }}/>}
    </main>
  )
}
