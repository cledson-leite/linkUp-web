'use client';

import ForgetForm from '@/app/component/molecule/auth/ForgetForm';
import GetEmailForm from '@/app/component/molecule/auth/GetEmailForm';
import { useForgetVM } from '@/view-model/hook/auth/useForgetVM';

import styles from './forget.organism.module.css';




export default function ForgetOrganism() {
  const {stateForget} = useForgetVM();
    return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Redefinir Senha</h1>
        {!stateForget.sending && <p className={styles.subtitle}>Informe seu token de autorização para redefinir sua senha.</p>}
      </div>
      {stateForget.sending ? <ForgetForm /> :<GetEmailForm />}
    </main>
  );
}
