import Link from 'next/link';

import SignInForm from '@/app/component/molecule/SignInForm';
import SocialButtons from '@/app/component/molecule/SocialButtons';

import styles from './signin.organism.module.css';




export default function SignInOrganism() {
    return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Entre na sua conta</h1>
        <p className={styles.subtitle}>Acesse sua conta para continuar usando o LinkUp</p>
      </div>
      <SocialButtons />
      <SignInForm />
      <div className={styles.footer}>
        <p>
          Ainda não tem uma conta? <Link href='/sign-up' className={styles.link}>Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}
