'use client'

import SocialButton from '@/app/component/atom/SocialButton'

import styles from './socialButtons.molecule.module.css'

export default function SocialButtons() {
  return (
    <main>
      <div className={styles.buttons}>
        <SocialButton variant="google" onClick={() => console.log('Google button clicked')} />
        <SocialButton variant="github" onClick={() => console.log('Github button clicked')} />
        <SocialButton variant="linkedin" onClick={() => console.log('Linkedin button clicked')} />
      </div>
      <div className={styles.divisor}>
        <div className={styles.line} aria-hidden='true' />
        <span className={styles.text}>ou</span>
        <div className={styles.line} aria-hidden='true' />
      </div>
    </main>
  )
}