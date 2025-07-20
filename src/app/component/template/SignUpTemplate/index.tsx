import SignUpForm from '@/app/component/molecule/SignUpForm'
import SocialButtons from '@/app/component/molecule/SocialButtons'

import styles from './signup.template.module.css'

export default function SignUpTemplate() {
  return (
    <div className={styles.container}>
      <SocialButtons />
      <SignUpForm />
    </div>
  )
}
