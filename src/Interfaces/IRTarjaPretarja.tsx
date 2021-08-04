import dtPretarja from './IdtPretarja'
interface IRTarjaPretarja {    
    dsDatos:{
        dtPretarja:dtPretarja[]        
    }
}
export default IRTarjaPretarja

/* 
interface IRTarjaPretarja {
    nCodigo:number;
    sMensaje:string;
    dtDatos:any; 
    dsDatos:{
        dtPretarja:dtPretarja,
        dtSubpartidas:[]
    },
    oExtra:any,
    bProcesado:boolean 
}
*/
/* 
    i.partida
    i.marca
    i.embalajesic
    i.bultos
    i.peso
    i.cveimo
    i.pesoaveria
*/