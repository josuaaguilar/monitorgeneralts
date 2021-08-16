import ProgressReferencias from "./ProgressReferencias";
//Importar aqui el JSON
import ReferenciasJSON from '../Reportes/RReferencias.json'
import IReferencias from '../Interfaces/IReferencias'

export default function Referencias () {
    return(
        
        
        <ProgressReferencias dsDatos={ReferenciasJSON}/>
        
        
    );
}