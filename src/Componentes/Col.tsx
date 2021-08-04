import CardTarjaPartida from './CardTarjaPartida'
import { useState } from 'react';
import RTarjaJSON from '../Reportes/RTarja.json' // <- Equivale a solicitar a la API de reporting o de SORF II
//import IRTarjaPretarja from '../Interfaces/IRTarjaPretarja';
import Tst from './Tst';
import ITarjaPretarja from '../Interfaces/IdtPretarja'




function Col(){
    /**Desde aquí vamos a solicitar datos para enviarlos a CardTarjaPartida */
    /* const [users,setUsers] = useState([])
    const [user,setUser] = useState('') */
    
    //Data.dsDatos.dtPretarja.map(i => console.log(i))
    return(<div className="col-md-6 offset-md-3">
        
        {/* Agregar props para definir lo que viene en la siguiente jerarquía. */}
        {/* Validar la posibilidad de separar en dos componentes, un encabezado con los datos admin de la tarja y el detalle de las partidas */}           
       
    </div>)     /**Retorna JSX */
}
export default Col;