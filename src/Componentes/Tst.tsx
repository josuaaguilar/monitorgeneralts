import IRTarjaPretarja from "../Interfaces/IRTarjaPretarja"
function Tst(props:any){
    const IRTarja : IRTarjaPretarja = {
        nCodigo:1,
        sMensaje:"Test",
        dtDatos: null,
        dsDatos:{
            dtPretarja:[{
                Contenedor:"UETU",
                conoci:"MEDU",
                fecingre:"2021",
                sello:"SL",
                estado:"Ingresado",
                pretarja:1234
            }],
            dtSubpartidas:[]
        },
        oExtra:{},
        bProcesado:true
    }
    console.log(props)
    /* console.log(props.responseJSON.dsDatos)
    console.log(props.responseJSON.dsDatos.dtPretarja[0])
    console.log(props.responseJSON.dsDatos.dtPretarja[0].Contenedor) */
    return(
        <h1></h1>
    )
}
export default Tst;