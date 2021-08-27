import AcordionAvisoDesconsolidacion from "./AcordionAvisoDesconsolidacion"
import RAvisoDesconsolidacionJSON from '../Reportes/RAvisoDesconsolidacion.json' //Datos duros
export default function AvisoDesconsolidacion() {
  return (
    <AcordionAvisoDesconsolidacion RAvisoDesconsolidacionJSON={RAvisoDesconsolidacionJSON}/>
  )
}