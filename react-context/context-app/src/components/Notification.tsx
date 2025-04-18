import { useNotification } from "../hooks/useNotification";

const Notificacion: React.FC = () => {
    const {message} = useNotification()
    if(!message) return null;
    return (
        <aside>
            <p>
                {message}
            </p>
        </aside>
    )
}
export default Notificacion;