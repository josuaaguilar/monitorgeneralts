import CardResult from './CardResult'
import { useState } from 'react';
import RTarjaJSON from '../Reportes/RTarja.json' // <- Equivale a solicitar a la API de reporting o de SORF II
//import IRTarjaPretarja from '../Interfaces/IRTarjaPretarja';
import Tst from './Tst';
import ITarjaPretarja from '../Interfaces/ITarjaPretarja'

function Col(props:any){
    /**Desde aquí vamos a solicitar datos para enviarlos a CardResult */
    const [users,setUsers] = useState([])
    const [user,setUser] = useState('')
    const dtPretarja = RTarjaJSON.dsDatos.dtPretarja;
    console.log(RTarjaJSON)
    //Data.dsDatos.dtPretarja.map(i => console.log(i))
    return(<div className="col-md-6 offset-md-3">
        <Tst dtPretarja={dtPretarja}/>
        {/* Agregar props para definir lo que viene en la siguiente jerarquía. */}
       {/* <CardResult dsDatos={RTarjaJSON.dsDatos}>
           
       </CardResult> */}
    </div>)     /**Retorna JSX */
}
export default Col;