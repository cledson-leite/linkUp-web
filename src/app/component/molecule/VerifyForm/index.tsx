'use client'



import { useActionState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'

import styles from './verifyform.molecule.module.css'


async function cadastrarAction(
  _prevState: { success: boolean; error?: string },
  formData: FormData
) {
  const data = {
    code: formData.get('code'),
  };


  // Simula chamada de API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('validando usuário:', data);
  return { success: true };
}
export default function VerifyForm() {
  const [state, formAction, pending] = useActionState(cadastrarAction, { success: false });
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
        onChange={(e) => console.log(e.target.value)}
      />
      <Button
        type="submit"
        label={pending ? 'Verificando...' : 'Verificar'}
        disabled={pending}
      />
    </form>
  )
}