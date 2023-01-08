import React, {useState, useRef} from 'react'
import styles from './styles/Chat.module.css'
import data from './chats.json'

const Chat = ({userId, chatId}) => {
  const textareaRef = useRef()

  const [mensajes, setMensajes] = useState(data.chats)

  const [parcial, setParcial] = useState({
    mensaje: '',
    hora: '',
  })

  const changeHeight = () => {
    textareaRef.current.style.height = "1em";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const guardarMensaje = e => {
    changeHeight()
    setParcial({
      ...parcial,
      mensaje: e.target.value
    })
  }

  const obtenerHora = () => {
    const date = new Date();
    const [hora, minutos] = [date.getHours(), date.getMinutes()];
    return `${hora}:${minutos}`
  }

  const enviarMensaje = () => {
    if (parcial.mensaje !== '') {
      setMensajes([
        ...mensajes, 
        {...parcial, hora: obtenerHora()}
      ])

      textareaRef.current.style.height = "auto";
      textareaRef.current.focus()

      setParcial({
        mensaje: '',
        hora: '', 
        userId: 1
      })
    }
    
  }

  const mostrarMensajes = () => {
    const mensajeS = mensajes.find(i => i.id === chatId)
    
    return mensajeS.messages.map(mensaje => {
      
      return (
        <div className={mensaje.from === userId ? styles.mensajePropio : styles.mensaje}>
          <p>{mensaje.text}</p>
          <p className={styles.hora}>12</p>
        </div>
      )
    })
  }

  return (
    <div className={styles.container}> 
      
      <div className={styles.contenedorMensajes}>
        {chatId === 0 ? "No" : mostrarMensajes()}  
      </div>
      

      <div className={styles.entradaMensaje}>
        <textarea rows="1" ref={textareaRef} value={parcial.mensaje} onChange={guardarMensaje}  className={styles.input}></textarea>
        <button className={styles.enviar} onClick={() => enviarMensaje()}>Send</button>
      </div>
    </div>
  )
}

export default Chat  