import IAvisoDesconsolidacion from "../Interfaces/IAvisoDesconsolidacion"
interface Props {
    RAvisoDesconsolidacionJSON: IAvisoDesconsolidacion
}
export default function AcordionAvisoDesconsolidacion(props: Props) {
    const dtAvisosDescon = props.RAvisoDesconsolidacionJSON.dsDatos.dtAvisosDescon;
    return (
        <div className="container" id={"AvisoDesconsolidacion"}>
            <div className="accordion" id="accordionExample">
                {dtAvisosDescon.map((AvisoDesco, index: number) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={index.toString() + "avisoDesco"}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#collapse" + (index.toString())}
                                aria-expanded="false"
                                aria-controls={"collapse" + (index.toString())}>
                                CN: {AvisoDesco.Contenedor}
                            </button>
                        </h2>
                        <div
                            id={"collapse" + (index.toString())}
                            className="accordion-collapse collapse"
                            aria-controls={index.toString()}
                        >
                            <div className="accordion-body">
                                <strong>Acuse: </strong>{AvisoDesco.Acuse}
                                <strong>Fecha de aviso</strong> {AvisoDesco.FAviso}
                                <strong>Tipo Aviso</strong> <span className={"badge rounded-pill bg-" + ((AvisoDesco.sEstado === "TERMINADO") ? "success" : "warning")}>{AvisoDesco.sTipoDesco ? AvisoDesco.sTipoDesco : "SA"}</span>
                            </div>
                        </div>
                    </div>))}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne">
                            Ejemplo Base
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}