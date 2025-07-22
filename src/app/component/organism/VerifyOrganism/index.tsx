import VerifyForm from '@/app/component/molecule/VerifyForm';

import styles from './verify.organism.module.css';




export default function VerifyOrganism() {
    return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Verificação</h1>
        <p className={styles.subtitle}>Token de Acesso Enviado para Seu E-mail</p>
      </div>
      <VerifyForm />
    </main>
  );
}
