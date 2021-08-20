import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
console.log(isAuthenticated)
    if (isLoading) {
        return <div>Cargando!</div>
    }
    if (isAuthenticated) {
        return (
        <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
        </div>)
    } else{
        return <div>No está autenticado</div>
    }
}