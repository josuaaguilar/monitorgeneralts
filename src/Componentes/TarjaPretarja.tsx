import CardTarjaPartida from "./CardTarjaPartida";
import RTarjaJSON from '../Reportes/RTarja.json' //Datos en duro
export default function TarjaPretarja(){
    return(
        <CardTarjaPartida TarjaJSON={RTarjaJSON}/>
    )
}