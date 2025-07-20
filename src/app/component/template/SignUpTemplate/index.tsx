
import SocialButton from '@/app/component/atom/SocialButton'

import styles from './signup.template.module.css'

export default function SignUpTemplate() {
  return (
    <div className={styles.container}>
      <SocialButton variant="google" />
      <SocialButton variant="github" />
      <SocialButton variant="linkedin" />
    </div>
  )
}
