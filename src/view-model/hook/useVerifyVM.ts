'use client';

import { useState, useTransition } from "react";

import { useSignUp } from "@clerk/nextjs";

import { VerifySchema } from "@/shared/validation";

type VerifyState = {
  success: boolean;
  verifing: boolean;
  errors?: Record<string, string>;
};

export const useVerifyVM = () => {
  const {signUp, setActive} = useSignUp()
  const [state, setState] = useState<VerifyState>({ success: false, errors: undefined, verifing: false });
  const [pending, startTransition] = useTransition()

  const action = async (
  prevState: VerifyState,
  formData: FormData
): Promise<VerifyState> => {
    const data= {
      code: formData.get('code'),
    }
    const result = VerifySchema.safeParse(data);
    if (!result.success) {
      const fieldErrors = result.error.issues.reduce((acc, issue) => {
        const field = issue.path[0] as string;
        acc[field] = issue.message;
        return acc;
      }, {} as Record<string, string>)
      setState({ success: false, errors: fieldErrors, verifing: true });
      return { success: false, errors: fieldErrors, verifing: true };
    }
    startTransition(async () => {
      try {
        const attempt = await signUp?.attemptEmailAddressVerification({
          code: result.data.code!
        })
        if(attempt?.status !== 'complete') {
          setState({ success: false, errors: { code: 'Token inválido' }, verifing: true });
          return
        }
        await setActive?.({ session: attempt.createdSessionId })
        setState({ success: true, errors: undefined, verifing: false })
      } catch (error: any) {
        setState({ success: false, errors: { code: error.message || 'Erro ao cadastrar' }, verifing: true });
      }
    });
    return { success: true, errors: undefined, verifing: true };
  };

  return { 
    stateVerify: state, 
    action, 
    pending 
  }
}