//import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavOpctiones from "./NavOpciones";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    //console.log(isAuthenticated)
    if (isLoading) {
        return <div>Cargando!</div>
    }
    if (isAuthenticated) {
        return (
            <div className="grid">
                <NavOpctiones/>
                <div className="grid-item">
                    <img src={user?.picture} alt={user?.name} />
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </div>


            </div>)
    } else {
        return <div>No está autenticado</div>
    }
}