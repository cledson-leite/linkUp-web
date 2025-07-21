import SignInOrganism from '@/app/component/organism/SignInOrganism'

import styles from './signin.template.module.css'

export default function SignInTemplate() {
  return (
    <main className={styles.container}>
      <SignInOrganism />
    </main>
  )
}
