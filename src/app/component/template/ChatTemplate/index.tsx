import Image from 'next/image'

import IconButton from '@/app/component/atom/IconButton'

import styles from './chat.template.module.css'

export default function ChatTemplate() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
          <h1 className={styles.title}>LinkUp</h1>
        </div>
        <div className={styles.actions}>
          <IconButton />
        </div>
      </header>
      <div className={styles.tabs}>
        <div className={styles.tab}>Contato</div>
        <div className={styles.tab}>Grupos</div>
      </div>
      <div className={styles.content}>
        children
      </div>
      <div className={styles.footer}>
        footer
      </div>
    </div>
  )
}
