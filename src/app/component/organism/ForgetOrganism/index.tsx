'use client';

import { useState } from 'react';

import GetEmailForm from '@/app/component/molecule/GetEmailForm';

import styles from './forget.organism.module.css';
import ForgetForm from '../../molecule/ForgetForm';




export default function ForgetOrganism() {
  const [success, setSuccess] = useState(false)
    return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Redefinir Senha</h1>
        {success && <p className={styles.subtitle}>Informe seu token de autorização para redefinir sua senha.</p>}
      </div>
      {success ? <ForgetForm setSuccess={setSuccess} /> :<GetEmailForm setSuccess={setSuccess} />}
    </main>
  );
}
