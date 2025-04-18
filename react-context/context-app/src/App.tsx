import { NotificationProvider } from "./contexts/NotificationContext"
import Notificacion from "./components/Notification"
import NotificationButton from "./components/NotificationButton"

function App() {
  

  return (
    <NotificationProvider>
       <h1>Transaccion lista</h1>
       <p>Estas segurp de que deseas completar esta transaccion</p>
      <NotificationButton/>
      <Notificacion/>
    </NotificationProvider>

  )
}

export default App
