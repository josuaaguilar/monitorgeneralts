//import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import NavOpctiones from "./NavOpciones";
import LogOut from './Logout'
import IReferencia from '../Interfaces/IReferencia'

export const Profile = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [userMetadata , setUserMetadata] = useState<IReferencia>();
    useEffect(() => {
        //console.log("useEfect")
        const getUserMetada = async () => {
            //La documentación dice que aquí defina mi dominio, en pruebas funciona el metodo getAccessTokenSilently con la audience declarada en el provider que esta en el index.tsx
            //const domain = "dev-dpcvu51y.us.auth0.com" //dev-dpcvu51y.us.auth0.com
            try{
                const accessToken = await getAccessTokenSilently({
                    audience: `https://monitorgeneral/api`,
                    scope: "read:messages"
                });

                //console.log(accessToken) //Token Ok

                const userDetailsByIdUrl = `http://localhost:3010/api/Referencias`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        authorization: "Bearer " +accessToken,
                    },
                });
                const responsejson : IReferencia = await metadataResponse.json()
                
                //console.log(responsejson.nFolio)
                
                setUserMetadata(responsejson)
                //console.log(userMetadata?.nombre) 
                

            }catch(e){
                console.log(e.message)
            }
        }
        getUserMetada();
        

    },[getAccessTokenSilently,user?.sub]);
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
                    <h3>User Metadata: {userMetadata?.nFolio} </h3>
                    <LogOut/>
                </div>


            </div>)
    } else {
        return <div>No está autenticado</div>
    }
}