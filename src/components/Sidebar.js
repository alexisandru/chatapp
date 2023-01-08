import React, {useState} from 'react'

import styles from './styles/Sidebar.module.css'

import usuarios from './users.json'
import mensajes from './chats.json'

const Sidebar = ({userId, elegirChat}) => {
  const [actual, setActual] = useState(1)
  const [id, setId] = useState(1)

  const cambiarCategoria = (num) => {
    setActual(num)
  }

  const busquedaMensajes = () => {
    const mensajesUsuario = mensajes.chats.filter(mensaje => mensaje.members.includes(userId))

    return mensajesUsuario.map(mensaje => {
      const contacto = mensaje.messages[0].from !== userId ? mensaje.messages[0].from : mensaje.messages[0].to
      const nombre = usuarios.users.find(user => user.id === contacto).nombre
      return (
        <div className={styles.mensaje} onClick={() => elegirChat(mensaje.id)}>
          <div className={styles.texto}>
            <h2 className={styles.nombre}>{nombre}</h2>
            <p className={styles.textoMensaje}>{mensaje.messages[0].text} </p>  
          </div>
          <div className={styles.hora}>
            <p>12:34</p>  
          </div>  
        </div>
      )
    })
  }

  const contenido = () => {
    if (actual === 1) {
      return (
        busquedaMensajes()
      )
    } else if (actual === 2) {
      return usuarios.users.map(user => {
        return (
          <div key={user.id} className={styles.mensaje}>
            <h2 className={styles.nombre}>{user.nombre}</h2>        
          </div>
        )
      })
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.categorias}>
        <div onClick={() => cambiarCategoria(1)} className={actual === 1 ? styles.categoriaActiva : styles.categoria}>Mensajes</div>
        <div onClick={() => cambiarCategoria(2)} className={actual === 2 ? styles.categoriaActiva : styles.categoria}>Usuarios</div>
      </div>

      <div className={styles.mensajes}>
        
        {contenido()}
        
      </div>
      
    </div>
  )
}

export default Sidebar