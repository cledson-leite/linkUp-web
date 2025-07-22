'use client';

import { useState, useTransition } from "react";

import { useSignUp } from "@clerk/nextjs";

import { VerifyController } from "@/controller/auth/verify.controller";
import { ClerkRepository } from "@/model/repositoy/clerk.repository";
import { VerifySchema } from "@/shared/validation";

type VerifyState = {
  success: boolean;
  verifing: boolean;
  errors?: Record<string, string>;
};

export const useVerifyVM = () => {
  const {signUp} = useSignUp()
  const repository = new ClerkRepository(signUp!)
  const controller = new VerifyController(repository)
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
        await controller.verifyToken(result.data.code)
        setState({ success: true, errors: undefined, verifing: false })
      } catch (error: any) {
        setState({ success: false, errors: { global: error.message || 'Erro ao cadastrar' }, verifing: true });
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