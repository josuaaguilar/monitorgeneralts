export default interface IReferencia {
    nFolio: number;
    sReferenciaAA: string;
    oCliente: {
        sRazonSocial: string;
        sRFC: string;
    };
    oFacturarA: {
        sRazonSocial: string;
        sRFC: string;
    };
    oAgenteAduanal: {
        sNombre: string;
        sPatente: string;
    };
    nTipoMercancia: number;
    nTrafico: number;
}