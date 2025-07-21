import VerifyForm from '@/app/component/molecule/VerifyForm';

import styles from './verify.organism.module.css';




export default function VerifyOrganism() {
    return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Verificação</h1>
      </div>
      <VerifyForm />
    </main>
  );
}
