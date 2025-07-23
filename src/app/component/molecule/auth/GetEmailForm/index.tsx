'use client'

import { useActionState } from 'react';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'
import { useForgetVM } from '@/view-model/hook/auth/useForgetVM';

import styles from './getemailform.molecule.module.css'


export default function GetEmailForm() {
  const {sendEmail, stateForget} = useForgetVM()
  const [state, formAction, pending] = useActionState(sendEmail, { success: false, errors: undefined, sending: false });
  
  return (
    <form action={formAction} className={styles.container}>
      <Input
        variant='email'
        label="Informe seu e-mail"
        name="email"
        error={stateForget.errors?.email || state.errors?.email}
      />
      <Button
        type="submit"
        label={pending ? 'Enviando...' : 'Enviar Token'}
        disabled={pending}
      />
    </form>
  )
}