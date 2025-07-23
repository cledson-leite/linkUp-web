import VerifyOrganism from '@/app/component/organism/auth/VerifyOrganism'

import styles from './verify.template.module.css'

export default function VerifyTemplate() {
  return (
    <main className={styles.container}>
      <VerifyOrganism />
    </main>
  )
}
