'use client'



import { useActionState, useEffect } from 'react';

// import { useRouter } from 'next/navigation';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'

import styles from './getemailform.molecule.module.css'


async function cadastrarAction(
  _prevState: { success: boolean; error?: string },
  formData: FormData
) {
  const data = {
    email: formData.get('email'),
  };


  // Simula chamada de API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('validando usuário:', data);
  return { success: true };
}
export default function GetEmailForm({setSuccess}: {setSuccess: (success: boolean) => void}) {
  const [state, formAction, pending] = useActionState(cadastrarAction, { success: false });
  // const router = useRouter();
  useEffect(() => {
    if (state.success) {
      setSuccess(true);
    }
  }, [state.success, setSuccess]);
  return (
    <form action={formAction} className={styles.container}>
      <Input
        variant='email'
        label="Informe seu e-mail"
        name="email"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button
        type="submit"
        label={pending ? 'Enviando...' : 'Enviar Token'}
        disabled={pending}
      />
    </form>
  )
}