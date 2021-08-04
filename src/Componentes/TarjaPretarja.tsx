import CardTarjaPartida from "./CardTarjaPartida";
import RTarjaJSON from '../Reportes/RTarja.json'
export default function TarjaPretarja(){
    return(
        <CardTarjaPartida TarjaJSON={RTarjaJSON}/>
    )
}