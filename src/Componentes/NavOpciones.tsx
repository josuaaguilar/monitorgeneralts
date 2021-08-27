import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import TarjaPretarja from "./TarjaPretarja"
import AvisoDesconsolidacion from "./AvisoDesconsolidacion"
import Referencias from "./Referencias"
import { useState } from "react"
import NetCoreReferencia from './NetCoreReferencia'
import { Profile } from './Profile'
import Usuarios from "./Usuarios"
export default function NavOpctiones(props: any) {
   
  const [Filter, setFilter] = useState("");
  return (
    <> {/* <> nos permite abreviar un <Fragment> </Fragment>. Es útil para retornar varios elementos jsx - > Refactorizar*/}
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-1">
          <div className="container-fluid">
            <Link to="/Perfil" className="navbar-brand">Perfil</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item" id={"Referencias"}>
                  <Link to="/Referencias" className="nav-link active">Referencias
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item" id={"TarjaPretarja"}>
                  <Link to="/TarjaPretarja" className="nav-link">TarjaPretarja</Link>
                </li>
                <li className="nav-item" id={"AvisoDesco"}>
                  <Link to="/AvisoDesconsolidacion" className="nav-link">AvisoDesconsolidacion</Link>
                </li>
                <li className="nav-item" id="Perfil">
                  <Link to="/NetCoreReferencias" className="nav-link">NetCoreReferencia</Link>
                </li>
                <li className="nav-item" id="Usuarios">
                  <Link to="/Usuarios" className="nav-link">Usuarios</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Bl/Booking" value={Filter} onChange={e => setFilter(e.target.value.toUpperCase())} />
                <button className="btn btn-secondary my-2 my-sm-0">Buscar!</button>
              </form>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/Perfil" component={Profile} />
          <Route exact path="/Referencias"><Referencias Filter={Filter} /></Route>
          <Route exact path="/TarjaPretarja" component={TarjaPretarja} />
          <Route exact path="/AvisoDesconsolidacion" component={AvisoDesconsolidacion} />
          <Route exact path="/NetCoreReferencias" component={NetCoreReferencia}></Route>
          <Route exact path="/Usuarios" component={Usuarios} />
        </Switch>
      </Router>
    </>

  )
}


    /* Esta funcion sirve para solicitar a la api publica cuando se extiende con
    ControllerBase, no requiere permisos.
    const options = {
      method: "GET",
      url : "https://monitorgeneral/api",
      headers: {
        authorization : "pcNcf2JrfWuRLhy3QfavulSNfTsEbqrJ"
      }
    }

    axios.request(options).then(function(response:any){
      console.log(response.data)
    }).catch(function (error:any) {
     //console.log(error)
    });
 */
  //const [BlBooking,setBlBooking] = useState<string>(''); //Settea el estado en NavOpciones

/*
<div id="NavOperaciones">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MonitorGeneral</a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/TarjaPretarja">TarjaPretarja</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AvisoDesconsolidacion">AvisoDesconsolidacion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/AvisoDesconsolidacion">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Separated link</a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
*/