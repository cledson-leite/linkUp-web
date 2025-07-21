'use client'


import { useActionState } from 'react';

import Button from '@/app/component/atom/Button';
import Input from '@/app/component/atom/Input'
import { signUpSchema } from '@/shared/validation';

import styles from './signupform.molecule.module.css'


async function cadastrarAction(
  _prevState: { success: boolean; error?: string },
  formData: FormData
) {
  const data = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // Validação com Zod
  const result = signUpSchema.safeParse(data);
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

  console.log('Cadastrando usuário:', result.data);
  return { success: true };
}

export default function SignUpForm() {
  const [state, formAction, pending] = useActionState(cadastrarAction, { success: false });
  return (
    <form action={formAction} className={styles.container}>
      <Input
        label='Nome'
        name='firstname'
        onChange={(e) => console.log(e.target.value)}
        error={state.errors?.firstname}
      />
      <Input
        label='Sobrenome'
        name='lastname'
        onChange={(e) => console.log(e.target.value)}
        error={state.errors?.lastname}
      />
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
      <Button
          type="submit"
          label={pending ? 'Cadastrando...' : 'Cadastrar'}
          disabled={pending}
        />
    </form>
  )
}