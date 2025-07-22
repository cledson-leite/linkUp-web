'use client'



import { useActionState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'
import { useVerifyVM } from '@/view-model/hook/useVerifyVM';

import styles from './verifyform.molecule.module.css'

export default function VerifyForm() {
  const {action} = useVerifyVM()
  const [state, formAction, pending] = useActionState(action, {
    success: false,
    errors: {},
    verifing: false
  });
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      router.push('/home')
    }
  }, [state.success, router])
  return (
    <form action={formAction} className={styles.container}>
      <Input
        label="Código de Verificação"
        name="code"
        // onChange={(e) => console.log(e.target.value)}
      />
      <Button
        type="submit"
        label={pending ? 'Verificando...' : 'Verificar'}
        disabled={pending}
      />
    </form>
  )
}