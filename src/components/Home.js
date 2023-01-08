import React, { useState } from 'react'

import styles from './styles/Home.module.css'

import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'

const Home = () => {

  const [userId, setUserId] = useState(1)
  const [chatId, setChatId] = useState(0)

  return(
    <div className={styles.container}>
      <Header />
        <Sidebar userId={userId} elegirChat={setChatId}/>
        <Chat userId={userId} chatId={chatId}/>
    </div>
  )
}

export default Home