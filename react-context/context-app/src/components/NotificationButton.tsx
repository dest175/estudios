import { useNotification } from "../hooks/useNotification";

const NotificacionButton: React.FC = () => {
    const {showNotification} = useNotification()
    return (
        <button onClick={()=>showNotification("muuuuyyy biiieeeenn XDD")}>
            Confirmar Transaccion
        </button>
    )
}
export default NotificacionButton;