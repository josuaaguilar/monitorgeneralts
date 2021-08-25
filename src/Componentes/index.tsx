import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react";
import IReferencia from '../Interfaces/IReferencia'



export default function Index() {
    const {getAccessTokenSilently}  = useAuth0();
    const [Referencia, setReferencia] = useState<IReferencia>();

    useEffect(() => {
        //console.log("UseEffect en Index!") 

        const getReferenciaMetadata = async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: "https://monitorgeneral/api",
                    scope: "read:messages"
                });
                const ReferenciasRequest = await fetch("http://localhost:3010/api/Referencias",
                    {
                        headers: { authorization: "Bearer " + accessToken }
                    });
                const ReferenciasResponse: IReferencia = await ReferenciasRequest.json();
                //console.log(ReferenciasResponse.nFolio)
                setReferencia(ReferenciasResponse)
            }
            catch (e) {
                console.log(e.message)
            }

        }
        getReferenciaMetadata();
    }, [getAccessTokenSilently]);
    //console.log(user)
    return (
        <div className="container">
            <div className="card">
                <div className="card-item">
                    <div className="card-header">
                        <h3>Folio de Referencia SORF: {Referencia?.nFolio}</h3>
                    </div>
                    <div className="card-body">
                        <h4>CLIENTE: {Referencia?.oCliente.sRazonSocial}</h4>
                        <div className="card-text"><h4>RFC: {Referencia?.oCliente.sRFC}</h4></div>

                    </div>
                </div>

            </div>

        </div>
    ) //Retorna JSX

}