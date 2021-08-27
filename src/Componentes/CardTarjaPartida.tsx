import IRTarjaPretarja from '../Interfaces/IRTarjaPretarja';
interface Props {
    TarjaJSON: IRTarjaPretarja
}
function CardTarjaPartida(props: Props) {
    const dtPretarja = props.TarjaJSON.dsDatos.dtPretarja /**dtPretarja es un array de objetos partida */
    const TarjaContenedor = dtPretarja[0].Contenedor;
    const TarjaConocimiento = dtPretarja[0].conoci;
    const TarjaFechaIngreso = dtPretarja[0].fecingre;
    const TarjaContenedorSello = dtPretarja[0].sello;
    const TarjaEstado = dtPretarja[0].estado;
    const TarjaFolio = dtPretarja[0].pretarja;
    return (
        <div className="container" id={"TarjaPretarja"}>
            <div className="card mb-1">
                <div className="card-header m-1">
                    <table >
                        <thead>
                            <tr>
                                <th>
                                    {TarjaEstado} CON FOLIO: {TarjaFolio}
                                </th>
                            </tr>
                            <tr>
                                <th><h6>Agente Aduanal</h6></th>
                                <th><h6>#Patente</h6></th>
                            </tr>
                            <tr>
                                <th><h6>Cliente</h6></th>
                                <th><h6>Razon Social</h6></th>
                            </tr>
                            <tr>
                                <th>Contenedor:</th>
                                <td>{TarjaContenedor}</td>
                                <th>Bl:</th>
                                <td>{TarjaConocimiento}</td>
                                <th>Sello:</th>
                                <td>{TarjaContenedorSello}</td>
                            </tr>
                            <tr>
                                <th>Fecha de ingreso: </th>
                                <td>{TarjaFechaIngreso}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Marcas</th>
                                <th scope="col">Embalaje</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Peso</th>
                                <th scope="col">IMO</th>
                                <th scope="col">Averia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dtPretarja.map((TarjaPretarja, index) => (
                                <tr key={index} className="table-success">
                                    <th scope="row">{TarjaPretarja.partida}</th>
                                    <td>{TarjaPretarja.marca}</td>
                                    <td>{TarjaPretarja.embalajesic}</td>
                                    <td>{TarjaPretarja.bultos}</td>
                                    <td>{TarjaPretarja.peso}</td>
                                    <td><span className={"badge rounded-pill bg-" + (TarjaPretarja.cveimo ? "danger" : "success")}>{TarjaPretarja.cveimo ? TarjaPretarja.cveimo : "NA"}</span></td>
                                    <td><span className={"badge rounded-pill bg-" + (TarjaPretarja.pesoaveria > 0 ? "danger" : "success")}>{(TarjaPretarja.pesoaveria > 0) ? "SI" : "NA"}</span></td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ) /**Retorna JSX */
}
export default CardTarjaPartida;
