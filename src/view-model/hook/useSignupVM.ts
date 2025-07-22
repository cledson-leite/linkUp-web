'use client';

import { useState, useTransition } from "react";

import { useSignUp } from "@clerk/nextjs";

import { signUpSchema } from "@/shared/validation";

type SignupState = {
  success: boolean;
  verifing: boolean;
  errors?: Record<string, string>;
};

export const useSignupVM = () => {
  const {signUp} = useSignUp()
  const [state, setState] = useState<SignupState>({ success: false, errors: undefined, verifing: false });
  const [pending, startTransition] = useTransition()

  const action = async (
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> => {
    const data= {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    const result = signUpSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors = result.error.issues.reduce((acc, issue) => {
        const field = issue.path[0] as string;
        acc[field] = issue.message;
        return acc;
      }, {} as Record<string, string>)
      setState({ success: false, errors: fieldErrors, verifing: false });
      return { success: false, errors: fieldErrors, verifing: false };
    }
    startTransition(async () => {
      try { 
        await signUp?.create({
          emailAddress: data.email, 
          password: data.password, 
          firstName: data.firstname, 
          lastName: data.lastname
        })
        await signUp?.prepareEmailAddressVerification({strategy: 'email_code' })
        setState({ success: true, errors: undefined, verifing: true })
      } catch (error: any) {
        if(error.message.includes('Password has been found in an online data breach')) {
          setState({ success: false, errors: { password: 'Esta senha já foi encontrada em vazamentos' }, verifing: false })
          return
        }
        setState({ success: false, errors: { global: error.message || 'Erro ao cadastrar' }, verifing: false })
      }
    });
    return { success: true, errors: undefined, verifing: true };
  };

  return { 
    stateSignup: state, 
    action, 
    pendingSignup: pending
  }
}