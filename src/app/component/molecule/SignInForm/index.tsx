'use client'


import { useActionState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'
import { useSignInVM } from '@/view-model/hook/useSignInVM';

import styles from './signinform.molecule.module.css'

export default function SignInForm() {
  const router = useRouter()
  const {action, stateSignIn} = useSignInVM()
  const [state, formAction, pending] = useActionState(action, { success: false, errors: undefined });
  useEffect(() => {
    if (stateSignIn.errors?.global) {
      toast.error(stateSignIn.errors.global);
    }
    if (stateSignIn.success) {
      router.push('/home')
    }
  }, [stateSignIn.errors?.global, stateSignIn.success, router, state])
  return (
    <form action={formAction} className={styles.container}>
      <Input
        variant="email"
        label="Email"
        name="email"
        onChange={(e) => console.log(e.target.value)}
        error={state.errors?.email}
      />
      <Input
        variant="password"
        label="Senha"
        name="password"
        onChange={(e) => console.log(e.target.value)}
        error={state.errors?.password}
      />
      <Link href='/forget' className={styles.forget}>Esqueceu a senha?</Link>
      <Button
          type="submit"
          label={pending ? 'Entrando...' : 'Entrar'}
          disabled={pending}
        />
    </form>
  )
}