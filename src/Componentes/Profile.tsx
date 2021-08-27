import { useAuth0 } from "@auth0/auth0-react";
import LogOut from './Logout'

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Cargando!</div>
    }
    if (isAuthenticated) {
        return (
            <div className="container">
                <div className="card mb-1">
                    <div className="card-header">
                        <img src={user?.picture} alt={user?.name} />
                        <h3>E-mail: {user?.email}</h3>
                    </div>
                    <div className="card-body">
                        <h2>Usuario: {user?.name}</h2>
                    </div>
                    <LogOut />
                </div>
            </div>)
    } else {
        return <div>No está autenticado</div>
    }
}