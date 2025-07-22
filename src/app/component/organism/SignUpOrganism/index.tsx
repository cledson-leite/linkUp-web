import Link from 'next/link';

import SignUpForm from '@/app/component/molecule/SignUpForm';

import styles from './signup.organism.module.css';




export default function SignUpOrganism() {
    return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <p className={styles.subtitle}>Crie sua conta para começar a usar o LinkUp</p>
      </div>
      <SignUpForm />
      <div className={styles.footer}>
        <p>
          Já tem uma conta? <Link href='/sign-in' className={styles.link}>Login</Link>
        </p>
      </div>
    </main>
  );
}
