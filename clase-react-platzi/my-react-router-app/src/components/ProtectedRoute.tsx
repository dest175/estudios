import { Navigate } from "react-router-dom";

interface ProtectedRouteProps{
    isAuthenticate: boolean;
    children:React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({isAuthenticate, children})=>{
    if(!isAuthenticate){
        return <Navigate to="/"/>

    }
    return <>{children}</>
}

export default ProtectedRoute;