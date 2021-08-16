export default interface IReferencias {    
        IdReferencia: Number;
        FolioReferencia: String;
        IdReferenciaOrigen: Number;
        FolioReferenciaOrigen: String;
        IdReferenciaDestino: Number;
        FolioReferenciaDestino: String;
        FechaCambioOperacion: null;
        EsRevalidado: Boolean;
        ReferenciaAgenteAduanal: String;
        TipoOperacionAduanera: Number;
        NumeroContenedor: String;
        Tarjas: String;
        BlBooking: String;
        ClaveUnica: String;
        Estado: Number;
        FechaEntrada: String;
        EsFrio: Boolean;
        AgenteAduanal: String;
        TipoMercancia: Number;
        FechaCaptura: String;
        Cliente: String;
        Buque: String;
    }