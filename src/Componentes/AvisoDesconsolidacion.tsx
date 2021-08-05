import AcordionAvisoDesconsolidacion from "./AcordionAvisoDesconsolidacion"
import RAvisoDesconsolidacionJSON from '../Reportes/RAvisoDesconsolidacion.json'
export default function AvisoDesconsolidacion() {
  return (
    <AcordionAvisoDesconsolidacion RAvisoDesconsolidacionJSON={RAvisoDesconsolidacionJSON}/>
  )
}