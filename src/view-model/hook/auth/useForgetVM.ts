'use client';

import { useState, useTransition } from "react";

import { useSignIn } from "@clerk/nextjs";

import { getemailSchema } from "@/shared/validation";

type ForgetState = {
  success: boolean;
  sending: boolean;
  errors?: Record<string, string>;
};

export const useForgetVM = () => {
  const {signIn} = useSignIn()
  const [state, setState] = useState<ForgetState>({ success: false, errors: undefined, sending: false });
  const [pending, startTransition] = useTransition()

  const sendEmail = async (
  prevState: ForgetState,
  formData: FormData
): Promise<ForgetState> => {
    const data= {
      email: formData.get('email'),
    }
    const result = getemailSchema.safeParse(data);
    
    if (!result.success) {
      const fieldErrors = result.error.issues.reduce((acc, issue) => {
        const field = issue.path[0] as string;
        acc[field] = issue.message;
        return acc;
      }, {} as Record<string, string>)
      setState({ success: false, errors: fieldErrors, sending: true });
      return { success: false, errors: fieldErrors, sending: true };
    }
    startTransition(async () => {
      try {
        await signIn?.create({
          strategy: 'reset_password_email_code',
          identifier: result.data.email!
        })
        setState({ success: true, errors: undefined, sending: true });
      } catch (error: any) {
        console.log(error)
        setState({ success: false, errors: { email: 'Usuario Logado' }, sending: false });
      }
    });
    return { success: true, errors: undefined, sending: true };
  };

  return { 
    stateForget: state, 
    sendEmail, 
    pending 
  }
}