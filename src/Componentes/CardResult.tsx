import TarjaPretarja from '../Interfaces/ITarjaPretarja'
import IRTarjaPretarja from '../Interfaces/IRTarjaPretarja';
interface Props {
    dtPretarja: TarjaPretarja
}
function CardResult(props: any) {
    const dtPretarja = props.dtPretarja /**dtPretarja es un array de objetos partida */
    //props.responseJSON.dsDatos.dtPretarja.map((i:any, index:number) => console.log(i))
    //dtPretarja.map((i) => console.log(i))
    const TarjaContenedor = dtPretarja.Contenedor;
    const TarjaConocimiento = dtPretarja.conoci;
    const TarjaFechaIngreso = dtPretarja.fecingre;
    const TarjaContenedorSello = dtPretarja.sello;
    const TarjaEstado = dtPretarja.estado;
    const TarjaFolio = dtPretarja.pretarja;
    console.log(dtPretarja)
    return (
        <div className="card mb-1">
            <div className="card-header">
                <p>{TarjaEstado} CON FOLIO: {TarjaFolio}</p>
                <table>
                    <thead>
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
                            <th>#</th>
                            <th>Marcas</th>
                            <th>Embalaje</th>
                            <th>Cantidad</th>
                            <th>Peso</th>
                            <th>IMO</th>
                            <th>Averia</th>
                        </tr>
                    </thead>
                    <tbody>
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
export default CardResult;
