'use client'


import { useActionState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'
import { useSignupVM } from '@/view-model/hook/useSignupVM';

import styles from './signupform.molecule.module.css'



export default function SignUpForm() {
  const {action, stateSignup} = useSignupVM()
  const [state, formAction, pending] = useActionState(action, {
    success: false,
    errors: {},
    verifing: false
  });
  const router = useRouter();
  useEffect(() => {
    if (stateSignup.success) {
      router.push('/verify')
    }
  }, [stateSignup.success, router, state])
  return (
    <form action={formAction} className={styles.container}>
      <Input
        label='Nome'
        name='firstname'
        error={stateSignup.errors?.firstname}
      />
      <Input
        label='Sobrenome'
        name='lastname'
        error={stateSignup.errors?.lastname}
      />
      <Input
        variant="email"
        label="Email"
        name="email"
        error={stateSignup.errors?.email}
      />
      <Input
        variant="password"
        label="Senha"
        name="password"
        error={stateSignup.errors?.password || stateSignup.errors?.global}
      />
      <Button
          type="submit"
          label={pending ? 'Cadastrando...' : 'Cadastrar'}
          disabled={pending}
        />
    </form>
  )
}