interface dtPretarja {
    pretarja:number;
    estado:string;
    feccap:string;
    usrcap:string;
    fecmod:string;
    usrmod:string;
    fecingre:string;
    usringre:string;
    Contenedor:string;
    conoci:string;
    sello:string;
    referencia:string;
    tarja:number;
    TipTarja:string;
    fecini:string;
    fecfin:string;
    observa:string;
    manio:string;
    controlador?:null;
    averia:boolean;
    obsaveria?:null;
    partida:number
    marca:string;
    numeros?:null;
    embalaje:string;
    descmer:string;
    bultos:number;
    peso:number;
    pesoneto:number;
    embalajesic:string;
    cubicaje:number;
    unidad:string;
    cveimo:string;
    un:string;
    incidencias:string;
    pesoaveria:number
    refrig:boolean;
    per:boolean;
}
export default dtPretarja;

/*
[
            {
                "pretarja": 122963.0,
                "estado": "INGRESADA A INVENTARIO",
                "feccap": "2021-07-28T12:36:13.487",
                "usrcap": "ARLETTE DE JESUS MARIN CARCAÑO",
                "fecmod": "2021-07-29T17:56:15.933",
                "usrmod": "  ",
                "fecingre": "2021-07-29T17:56:15.933",
                "usringre": "ARLETTE DE JESUS MARIN CARCAÑO",
                "Contenedor": "TLLU2342210",
                "conoci": "MEDUG4626529",
                "sello": "ISG119801",
                "referencia": "2100166655",
                "tarja": 122963.0,
                "TipTarja": "DESCONSOLIDACION",
                "fecini": "1899-01-01T00:00:00.000",
                "fecfin": "1899-01-01T00:00:00.000",
                "observa": "DESCONSOLIDACIÓN INDIRECTA INICIO: 29/07/2021 16:00 FIN: 29/07/2021 17:00",
                "manio": "ICAVE TEC 2",
                "controlador": null,
                "averia": false,
                "obsaveria": null,
                "partida": 1,
                "marca": "DRIV MEXICO",
                "numeros": null,
                "embalaje": "PALLETS",
                "descmer": "AUTOMOTIVE PARTS",
                "bultos": 12,
                "peso": 5410.5000,
                "pesoneto": 5410.5000,
                "embalajesic": "PALLETS",
                "cubicaje": 0.000000000,
                "unidad": "KILO",
                "cveimo": "",
                "un": "",
                "incidencias": "EMBALAJE DEFICIENTE Y ROTO, CARTONES APLASTADOS Y ROTOS",
                "pesoaveria": 5410.5000,
                "refrig": false,
                "per": false
            },
            {
                "pretarja": 122963.0,
                "estado": "INGRESADA A INVENTARIO",
                "feccap": "1899-01-01T00:00:00",
                "usrcap": "ARLETTE DE JESUS MARIN CARCAÑO",
                "fecmod": "2021-07-30T11:47:37.4",
                "usrmod": "  ",
                "fecingre": "2021-07-29T17:56:15.933",
                "usringre": "ARLETTE DE JESUS MARIN CARCAÑO",
                "Contenedor": "TLLU2342210",
                "conoci": "MEDUG4626529",
                "sello": "ISG119801",
                "referencia": "2100166655",
                "tarja": 122963.0,
                "TipTarja": "DESCONSOLIDACION",
                "fecini": "1899-01-01T00:00:00.000",
                "fecfin": "1899-01-01T00:00:00.000",
                "observa": "DESCONSOLIDACIÓN INDIRECTA INICIO: 29/07/2021 16:00 FIN: 29/07/2021 17:00",
                "manio": "ICAVE TEC 2",
                "controlador": null,
                "averia": false,
                "obsaveria": null,
                "partida": 2,
                "marca": "FEDERAL MOGUL",
                "numeros": null,
                "embalaje": "PALLETS",
                "descmer": "AUTOMOTIVE PARTS",
                "bultos": 7,
                "peso": 734.9640,
                "pesoneto": 734.9640,
                "embalajesic": "PALLETS",
                "cubicaje": 0.000000000,
                "unidad": "KILO",
                "cveimo": "",
                "un": "",
                "incidencias": "EMBALAJE DEFICIENTE Y ROTO, CARTONES APLASTADOS",
                "pesoaveria": 734.9640,
                "refrig": false,
                "per": false
            },
            {
                "pretarja": 122963.0,
                "estado": "INGRESADA A INVENTARIO",
                "feccap": "1899-01-01T00:00:00",
                "usrcap": "ARLETTE DE JESUS MARIN CARCAÑO",
                "fecmod": "2021-07-30T12:01:04.163",
                "usrmod": "  ",
                "fecingre": "2021-07-29T17:56:15.933",
                "usringre": "ARLETTE DE JESUS MARIN CARCAÑO",
                "Contenedor": "TLLU2342210",
                "conoci": "MEDUG4626529",
                "sello": "ISG119801",
                "referencia": "2100166655",
                "tarja": 122963.0,
                "TipTarja": "DESCONSOLIDACION",
                "fecini": "1899-01-01T00:00:00.000",
                "fecfin": "1899-01-01T00:00:00.000",
                "observa": "DESCONSOLIDACIÓN INDIRECTA INICIO: 29/07/2021 16:00 FIN: 29/07/2021 17:00",
                "manio": "ICAVE TEC 2",
                "controlador": null,
                "averia": false,
                "obsaveria": null,
                "partida": 3,
                "marca": "LAYSOL",
                "numeros": null,
                "embalaje": "PALLETS",
                "descmer": "SAMPLES OF LYSOL DISINFECTING SPRAY",
                "bultos": 2,
                "peso": 997.1200,
                "pesoneto": 997.1200,
                "embalajesic": "PALLETS",
                "cubicaje": 0.000000000,
                "unidad": "KILO",
                "cveimo": "2.1",
                "un": "1950",
                "incidencias": "EMBALAJE DEFICIENTE Y ROTO, CARTONES APLASTADOS",
                "pesoaveria": 997.1200,
                "refrig": false,
                "per": false
            },
            {
                "pretarja": 122963.0,
                "estado": "INGRESADA A INVENTARIO",
                "feccap": "1899-01-01T00:00:00",
                "usrcap": "ARLETTE DE JESUS MARIN CARCAÑO",
                "fecmod": "2021-07-30T09:05:07.347",
                "usrmod": "  ",
                "fecingre": "2021-07-29T17:56:15.933",
                "usringre": "ARLETTE DE JESUS MARIN CARCAÑO",
                "Contenedor": "TLLU2342210",
                "conoci": "MEDUG4626529",
                "sello": "ISG119801",
                "referencia": "2100166655",
                "tarja": 122963.0,
                "TipTarja": "DESCONSOLIDACION",
                "fecini": "1899-01-01T00:00:00.000",
                "fecfin": "1899-01-01T00:00:00.000",
                "observa": "DESCONSOLIDACIÓN INDIRECTA INICIO: 29/07/2021 16:00 FIN: 29/07/2021 17:00",
                "manio": "ICAVE TEC 2",
                "controlador": null,
                "averia": false,
                "obsaveria": null,
                "partida": 4,
                "marca": "DRIV DE MEXICO",
                "numeros": null,
                "embalaje": "PALLETS",
                "descmer": "ZINC POWDER, MADO OF 99,995 ZN",
                "bultos": 1,
                "peso": 1030.0000,
                "pesoneto": 1030.0000,
                "embalajesic": "PALLETS",
                "cubicaje": 0.000000000,
                "unidad": "KILO",
                "cveimo": "9",
                "un": "3077",
                "incidencias": "EMBALAJE DEFICIENTE, ROTO",
                "pesoaveria": 1030.0000,
                "refrig": false,
                "per": false
            }
        ]
*/

/*
Contenedor: string,
    conoci: string,
    fecingre: string,
    sello: string,
    estado: string,
    pretarja: number
    partida: number;
    marca: string;
    embalajesic: string;
    bultos: number;
    peso: number;
    cvimo: string;
    pesoaveria: number;
-----------------------------------------------------------------------------------------------------------------------
                "pretarja": 122963.0,
                "estado": "INGRESADA A INVENTARIO",
                "feccap": "2021-07-28T12:36:13.487",
                "usrcap": "ARLETTE DE JESUS MARIN CARCAÑO",
                "fecmod": "2021-07-29T17:56:15.933",
                "usrmod": "  ",
                "fecingre": "2021-07-29T17:56:15.933",
                "usringre": "ARLETTE DE JESUS MARIN CARCAÑO",
                "Contenedor": "TLLU2342210",
                "conoci": "MEDUG4626529",
                "sello": "ISG119801",
                "referencia": "2100166655",
                "tarja": 122963.0,
                "TipTarja": "DESCONSOLIDACION",
                "fecini": "1899-01-01T00:00:00.000",
                "fecfin": "1899-01-01T00:00:00.000",
                "observa": "DESCONSOLIDACIÓN INDIRECTA INICIO: 29/07/2021 16:00 FIN: 29/07/2021 17:00",
                "manio": "ICAVE TEC 2",
                "controlador": null,
                "averia": false,
                "obsaveria": null,
                "partida": 1,
                "marca": "DRIV MEXICO",
                "numeros": null,
                "embalaje": "PALLETS",
                "descmer": "AUTOMOTIVE PARTS",
                "bultos": 12,
                "peso": 5410.5000,
                "pesoneto": 5410.5000,
                "embalajesic": "PALLETS",
                "cubicaje": 0.000000000,
                "unidad": "KILO",
                "cveimo": "",
                "un": "",
                "incidencias": "EMBALAJE DEFICIENTE Y ROTO, CARTONES APLASTADOS Y ROTOS",
                "pesoaveria": 5410.5000,
                "refrig": false,
                "per": false
*/