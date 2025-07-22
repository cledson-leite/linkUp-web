'use client';

import { useState, useTransition } from "react";

import { useSignIn } from "@clerk/nextjs";

import { signInSchema } from "@/shared/validation";

type SigninState = {
  success: boolean;
  errors?: Record<string, string>;
};

export const useSignInVM = () => {
  const {signIn, setActive} = useSignIn()
  const [state, setState] = useState<SigninState>({ success: false, errors: undefined });
  const [pending, startTransition] = useTransition()

  const action = async (
  prevState: SigninState,
  formData: FormData
): Promise<SigninState> => {
    const data= {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    const result = signInSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors = result.error.issues.reduce((acc, issue) => {
        const field = issue.path[0] as string;
        acc[field] = issue.message;
        return acc;
      }, {} as Record<string, string>)
      setState({ success: false, errors: fieldErrors });
      return { success: false, errors: fieldErrors };
    }
    startTransition(async () => {
      try { 
        const attempt = await signIn?.create({
          identifier: data.email, 
          password: data.password,
        })
        if(attempt?.status !== 'complete') {
          setState({ success: false, errors: { global: 'Email ou senha inválidos' }})
          return
        }
        await setActive?.({ session: attempt.createdSessionId })
        setState({ success: true, errors: undefined})
      } catch (error: any) {
          console.log(error)

        setState({ success: false, errors: { global: 'Email ou senha inválidos' }})
      }
    });
    return { success: true, errors: undefined };
  };

  return { 
    stateSignIn: state, 
    action, 
    pendingSignup: pending
  }
}