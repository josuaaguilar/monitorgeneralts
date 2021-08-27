import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="container">
            <div className="card mt-3 p-1">
                <div className="card-header m-2">
                    <h1 className="text-center">Necesitas iniciar sesión para ver el contenido!</h1>
                </div>
                <button className="btn btn-primary m-2" onClick={() => { loginWithRedirect() }}>Login</button>
            </div>
        </div>
    )
}

/*
return <button onClick={() => {loginWithRedirect()}}>Login</button>
*/