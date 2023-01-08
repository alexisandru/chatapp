import React from 'react'

import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Chat App</h1>

      <a className={styles.profile} href="!#"></a>
    </div>
  )
}

export default Header