'use client'

import { FaPlus } from "react-icons/fa6";

import styles from './iconbutton.module.css'

export default function IconButton() {
  return (
    <div className={styles.container} onClick={() => console.log('icon button clicked')}>
      <FaPlus size={24} />
    </div>
  )
}
