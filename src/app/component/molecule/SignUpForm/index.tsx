'use client'

import Input from '@/app/component/atom/Input'

import styles from './signupform.module.css'

export default function SignUpForm() {
  return (
    <main className={styles.container}>
      <div className={styles.containerLinha}>
        <Input
          className={styles.inputNomeCompleto}
            label='Nome'
            onChange={(e) => console.log(e.target.value)}
          />
        <Input
          className={styles.inputNomeCompleto}
          label='Sobrenome'
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <Input
        className={styles.input}
        variant="email"
        label="Email"
        // value=""
        onChange={(e) => console.log(e.target.value)}
      />
      <div className={styles.containerLinha}>
      <Input
        className={styles.inputConfirmarSenha}
        variant="password"
        label="Senha"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        className={styles.inputConfirmarSenha}
        variant="password"
        label=" Confirmar Senha"
        onChange={(e) => console.log(e.target.value)}
      />
      </div>
    </main>
  )
}