export default interface IReferencias {    
        IdReferencia: Number;
        FolioReferencia: string;
        IdReferenciaOrigen: Number;
        FolioReferenciaOrigen: string;
        IdReferenciaDestino: Number;
        FolioReferenciaDestino: string;
        FechaCambioOperacion: null;
        EsRevalidado: Boolean;
        ReferenciaAgenteAduanal: string;
        TipoOperacionAduanera: Number;
        NumeroContenedor: string;
        Tarjas: string;
        BlBooking: string;
        ClaveUnica: string;
        Estado: Number;
        FechaEntrada: string;
        EsFrio: Boolean;
        AgenteAduanal: string;
        TipoMercancia: Number;
        FechaCaptura: string;
        Cliente: string;
        Buque: string;
    }