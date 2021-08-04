import IRTarjaPretarja from '../Interfaces/IRTarjaPretarja';
interface Props {
    TarjaJSON: IRTarjaPretarja
}
function CardTarjaPartida(props:Props) {
    const dtPretarja = props.TarjaJSON.dsDatos.dtPretarja /**dtPretarja es un array de objetos partida */
    //props.responseJSON.dsDatos.dtPretarja.map((i:any, index:number) => console.log(i))
    //dtPretarja.map((i) => console.log(i))
    const TarjaContenedor = dtPretarja[0].Contenedor;
    const TarjaConocimiento = dtPretarja[0].conoci;
    const TarjaFechaIngreso = dtPretarja[0].fecingre;
    const TarjaContenedorSello = dtPretarja[0].sello;
    const TarjaEstado = dtPretarja[0].estado;
    const TarjaFolio = dtPretarja[0].pretarja;
    console.log(dtPretarja)
    return (
        <div className="card mb-1">
            <div className="card-header">
                <table>
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
                        {dtPretarja.map((i, index) => (
                            <tr key={index} className="table-success">
                                <th scope="row">{i.partida}</th>
                                <td>{i.marca}</td>
                                <td>{i.embalajesic}</td>
                                <td>{i.bultos}</td>
                                <td>{i.peso}</td>
                                <td><span className={"badge rounded-pill bg-"+ ( i.cveimo ? "danger":"success") }>{i.cveimo ? i.cveimo:"NA"}</span></td>
                                <td><span className={"badge rounded-pill bg-"+ ( i.pesoaveria>0?"danger":"success") }>{(i.pesoaveria > 0) ? "SI":"NA"}</span></td>
                            </tr>))}
                        {/* dtPretarja.map(
                            (i:any, index: number) => (
                                <tr key={index}>
                                    <td>{i.partida}</td>
                                    <td>{i.marca}</td>
                                    <td>{i.embalajesic}</td>
                                    <td>{i.bultos}</td>
                                    <td>{i.peso}</td>
                                    <td><span className={"badge rounded-pill " + (i.cveimo ? "bg-danger" : "bg-success")}>{i.cveimo ? i.cveimo : "NA"}</span></td>
                                    <td><span className={"badge rounded-pill " + ((i.pesoaveria > 0) ? "bg-danger" : "bg-success")}>{(i.pesoaveria > 0) ? i.pesoaveria : "NA"}</span></td>
                                </tr>
                            )
                        ) */}
                    </tbody>

                </table>
            </div>
        </div>) /**Retorna JSX */
}
export default CardTarjaPartida;
