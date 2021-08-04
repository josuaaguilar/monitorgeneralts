import SimpleJSON from './Reportes/SimpleJSON.json' //Fetch data
import Tst from './Componentes/Tst'

export default function TarjasMain(){
    return(
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Tst SimpleJSON={SimpleJSON}/>
                </div>
            </div>
        </div>
    )
}