import ProgressReferencias from "./ProgressReferencias";
//Importar aqui el JSON
import ReferenciasJSON from '../Reportes/RReferencias.json' //Datos en duro
type Props = {
    Filter:string;
}
export default function Referencias(props:Props) {
    return (
            <ProgressReferencias dsDatos={ReferenciasJSON.filter(BlBooking => BlBooking.BlBooking.startsWith(props.Filter))}/>
    );
}