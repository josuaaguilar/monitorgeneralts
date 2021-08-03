interface IRTarjaPretarja {
    nCodigo:number;
    sMensaje:string;
    dtDatos:any; 
    dsDatos:{
        dtPretarja:[{
            Contenedor:string,
            conoci:string,
            fecingre:string,
            sello:string,
            estado:string,
            pretarja:number
        }],
        dtSubpartidas:[]
    },
    oExtra:object,
    bProcesado:boolean 
}
export default IRTarjaPretarja
