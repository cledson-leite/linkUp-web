'use client'

import Link from 'next/link'

import Button from '@/app/component/atom/Button'
import SignUpForm from '@/app/component/molecule/SignUpForm'
import SocialButtons from '@/app/component/molecule/SocialButtons'

import styles from './signup.organism.module.css'

export default function SignUpOrganism() {
  return (
    <main className={styles.container}>
      <SocialButtons />
      <SignUpForm />
      <Button label='Cadastrar' className={styles.button} onClick={() => console.log('Cadastrar')}/>
        <div className={styles.footer}>
        <p >Já tem uma conta? <Link href='/sign-in' className={styles.link}>Login</Link></p>
      </div>
    </main>
  )
}
