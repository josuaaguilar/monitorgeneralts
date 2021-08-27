import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react";
import IReferencia from '../Interfaces/IReferencia'
import { GetReferencias } from './Helpers/GetReferencias'

export default function NetCoreReferencia() {
    const { getAccessTokenSilently } = useAuth0();
    const [Referencias, setReferencia] = useState<IReferencia[]>();
    useEffect(() => {
        const getReferencias = async () => {
            const accessToken: string = await getAccessTokenSilently({
                audience: "https://monitorgeneral/api",
                scope: "read:messages"
            });
            const newReferencias = await GetReferencias(accessToken)
            setReferencia(newReferencias.referencias)
        }
        getReferencias();
    }, [getAccessTokenSilently]);
    /* 
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
                    const ReferenciasResponse = await ReferenciasRequest.json();
                    //ReferenciasResponse.referencias.map((i:IReferencia)=>{console.log(i)})
    
                    setReferencia(ReferenciasResponse.referencias)
                }
                catch (Error) {
                    console.log(Error.message)
                }
    
            }
            getReferenciaMetadata();
        }, [getAccessTokenSilently]); */
    //console.log(user)
    return (
        <div className="container">
            {Referencias?.map(Referencia => (
                <div className="card m-2" key={Referencia.nFolio}>
                    <div className="card-item p-1">
                        <div className="card-header">
                            <h4>Referencia SORF: <small className="text-muted">{Referencia.nFolio}</small></h4>
                            <span className={"badge bg-" + (Referencia.nTipoMercancia === 1 ? "primary" : "success")}>{Referencia.nTipoMercancia === 1 ? 'CONTENEDOR' : 'CARGA SUELTA'}</span>
                            <span className={"badge bg-" + (Referencia.nTrafico === 1 ? "primary" : "success")}>{Referencia.nTrafico === 1 ? 'IMPO' : 'EXPO'}</span>
                            <h5>Agente Aduanal: <small>{Referencia.oAgenteAduanal.sPatente}-{Referencia.oAgenteAduanal.sNombre}</small>  {Referencia.sReferenciaAA}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h4>Cliente: <small className="text-muted"> {Referencia.oCliente.sRazonSocial}</small></h4>
                            </li>
                            <li className="list-group-item">
                                <h4>Facturar A: <small className="text-muted"> {Referencia.oFacturarA.sRazonSocial}</small></h4>
                            </li>
                        </ul>
                        <div className="card-footer">
                            <p>Razón Social: {Referencia.oCliente.sRazonSocial}</p>
                        </div>

                    </div>

                </div>))}
        </div>
    ) //Retorna JSX

}