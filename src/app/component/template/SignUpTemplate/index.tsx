import Input from '@/app/component/atom/Input'

import styles from './signup.template.module.css'

export default function SignUpTemplate() {
  return (
    <div className={styles.container}>
      <Input label='Nome' error={'error'}/>
      <Input label='Sobrenome' />
      <Input label='Email' variant='email' />
      <Input label='Password' variant='password' />
    </div>
  )
}
