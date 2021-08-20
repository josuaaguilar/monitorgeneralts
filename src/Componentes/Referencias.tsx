import ProgressReferencias from "./ProgressReferencias";
//Importar aqui el JSON
import ReferenciasJSON from '../Reportes/RReferencias.json'

export default function Referencias() {
    return (
            <ProgressReferencias dsDatos={ReferenciasJSON} />
    );
}