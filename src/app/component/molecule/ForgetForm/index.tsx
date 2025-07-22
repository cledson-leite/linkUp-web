'use client'



import { useActionState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'
import { forgetSchema } from '@/shared/validation';

import styles from './forgetform.molecule.module.css'


async function cadastrarAction(
  _prevState: { success: boolean; error?: string },
  formData: FormData
) {
  const data = {
    code: formData.get('code'),
    password: formData.get('password'),
  };
  const result = forgetSchema.safeParse(data);
  
  if (!result.success) {
    const fieldErrors = result.error.issues.reduce((acc, issue) => {
      const field = issue.path[0] as string;
      acc[field] = issue.message;
        return acc;
      }, {} as Record<string, string>);
  
      return { success: false, errors: fieldErrors };
    }

  // Simula chamada de API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('validando usuário:', data);
  return { success: true };
}
export default function ForgetForm({setSuccess}: {setSuccess: (success: boolean) => void}) {
  const [state, formAction, pending] = useActionState(cadastrarAction, { success: false });
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      router.push('/home')
      setSuccess(false);
    }
  }, [state.success, setSuccess, router]);
  return (
    <form action={formAction} className={styles.container}>
      <Input
        variant='number'
        label="token de autorização"
        name="code"
        onChange={(e) => console.log(e.target.value)}
        error={state.errors?.code}
      />
      <Input
      variant='password'
        label="Informe a nova senha"
        name="password"
        onChange={(e) => console.log(e.target.value)}
        error={state.errors?.password}
      />
      <Button
        type="submit"
        label={pending ? 'Redefinindo...' : 'Redefinir Senha'}
        disabled={pending}
      />
    </form>
  )
}