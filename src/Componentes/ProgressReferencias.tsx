//import { useState } from "react"
import IReferencias from '../Interfaces/IReferencias'
interface Props {
    dsDatos : IReferencias[]
}

export default function ProgressReferencias(props:Props) {
    props.dsDatos.map((i, index) => {console.log(i.BlBooking)})
    //const [ServiceWidth,setServiceWidth] = useState(0);
    const ServiceWidth = {
        width: '100%'
    }
    const IngresoWidth = {
        width: '100%'
    }
    const SalidaeWidth = {
        width: '100%'
    }

    return (
           
               <div className="grid-container m-3">
               {props.dsDatos.map((i, index) => (
                   <>
                   <div className={"grid-item1 m-1"} key={index}>
                       <h1>Servicios</h1>
                       <div className="progress">
                           <div className="progress-bar bg-success" role="progressbar" style={ServiceWidth}></div>
                       </div>
                       <div className="card bg-secondary mb-3">
                           <div className="card-header">AgenteAduanal: {i.AgenteAduanal}</div>
                           <div className="card-body">
                               <h4>Bl / Booking: {i.BlBooking}</h4>
                               <div className="card-text">Referencia Agente Aduanal: {i.ReferenciaAgenteAduanal}</div>
                           </div>
                       </div>
                   </div>
                   <div className={"grid-item2 m-1"} key={index}>
                       <h1>Ingreso</h1>
                       <div className="progress">
                           <div className="progress-bar bg-success" role="progressbar" style={ServiceWidth}></div>
                       </div>
                       <div className="card bg-secondary mb-3">
                           <div className="card-header">Cliente: {i.Cliente}</div>
                           <div className="card-body">
                               <h4>TipoMercancia: {i.TipoMercancia == 1 ? 'CN':'CS'}</h4>
                               <div className="card-text">Numero: {i.TipoMercancia == 1 ? i.NumeroContenedor:i.Tarjas}</div>
                           </div>
                       </div>
                   </div>
                   <div className={"grid-item3 m-1"} key={index}>
                       <h1>Salida</h1>
                       <div className="progress">
                           <div className="progress-bar bg-success" role="progressbar" style={ServiceWidth}></div>
                       </div>
                       <div className="card bg-secondary mb-3">
                           <div className="card-header">Buque: {i.Buque}</div>
                           <div className="card-body">
                               <h4>Estado: {i.Estado == 1 ? 'Preliminar':'Programada'}</h4>
                               <div className="card-text">Referencia SORF II: {i.FolioReferencia}</div>
                           </div>
                       </div>
                   </div>
                   </>
                   ))}
               </div>
           
    );
}

/*
Progress bar
<div className="progress">
                <div className="progress-bar"
                    role="progressbar"
                    style={ServiceWidth}
                >
                </div>
                <div className="progress-bar bg-success" role="progressbar" style={IngresoWidth} ></div>
                <div className="progress-bar bg-info" role="progressbar" style={SalidaeWidth} ></div>
            </div>
-----------------------------------------------------------------<>-----------------------------------------------------------

        <div className="grid-container m-3">
            <div className="grid-item1 m-1">
                <h1>Servicios</h1>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={IngresoWidth} ></div>
                </div>
                <div className="card bg-secondary mb-3">
                    <div className="card-header">Agente Aduanal</div>
                    <div className="card-body">
                        <h4 className="card-title">BL / Booking</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="grid-item2 m-1">
                <h1>Ingreso</h1>
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={IngresoWidth} ></div>
                </div>
                <div className="card bg-secondary mb-3">
                    <div className="card-header">Estado del ingreso</div>
                    <div className="card-body">
                        <h4 className="card-title">Secondary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="grid-item3 m-1">
                <h1>Salida</h1>
                <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={IngresoWidth} ></div>
                </div>
                <div className="card bg-secondary mb-3">
                    <div className="card-header">Estado a la salida</div>
                    <div className="card-body">
                        <h4 className="card-title">Secondary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
*/