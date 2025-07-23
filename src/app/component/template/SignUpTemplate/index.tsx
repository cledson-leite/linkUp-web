import SignUpOrganism from '@/app/component/organism/auth/SignUpOrganism'

import styles from './signup.template.module.css'

export default function SignUpTemplate() {
  return (
    <main className={styles.container}>
      <SignUpOrganism />
    </main>
  )
}
