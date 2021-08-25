    import React from 'react'
    import {useAuth0} from '@auth0/auth0-react'
    type submitEvent = React.FormEvent<HTMLFormElement>
    export const LoginButton = () => {
        const submitHandler = (e:submitEvent) =>{
            e.preventDefault();
            console.log("handler")
        }
        const {loginWithRedirect} = useAuth0();
        return (
            <div className="grid">
                <div className="grid-item">
                    <div className="form">
                        <h1>Necesitas iniciar sesión para ver el contenido!</h1>

                        <form onSubmit={submitHandler}>
                            <button className="btn btn-primary" onClick={()=>{loginWithRedirect()}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    /* 
    return <button onClick={() => {loginWithRedirect()}}>Login</button>
    */