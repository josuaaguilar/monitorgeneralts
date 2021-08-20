import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import TarjaPretarja from "./TarjaPretarja"
import AvisoDesconsolidacion from "./AvisoDesconsolidacion"
import Referencias from "./Referencias"

import React, { useState } from "react"

export default function NavOpctiones(props: any) {
  const [BlBooking,setBlBooking] = useState<string>(''); //Settea el estado en NavOpciones
  return (
    <> {/* <> nos permite abreviar un <Fragment> </Fragment>. Es útil para retornar varios elementos jsx*/}
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-1">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Monitor General</Link>
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
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Bl/Booking" value={BlBooking} onChange={e => setBlBooking(e.target.value.toUpperCase())}/>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar!</button>
            </form>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/TarjaPretarja" component={TarjaPretarja} />
        <Route exact path="/AvisoDesconsolidacion" component={AvisoDesconsolidacion} />
        <Route exact path="/Referencias" component={Referencias} />
      </Switch>
    </Router>
  </>
    
  )
}

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