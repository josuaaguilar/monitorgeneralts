import NavOpctiones from './Componentes/NavOpciones'
function MonitorMain() {
  return (

    
    <NavOpctiones/>
    
    
  )
}
export default MonitorMain;

/*
<NavOpctiones >
        <Router>
          <Link to="/">Inicio</Link>
          <Link to="/AvisoDesconsolidacion">Aviso Desco</Link>
          <Link to="/TarjaPretarja">TarjaPretarja</Link>
          <Switch>
            <Route exact path="/TarjaPretarja" component={TarjaPretarja} />
            <Route exact path="/AvisoDesconsolidacion" component={AvisoDesco} />
          </Switch>
        </Router>
      </NavOpctiones>
------------------------------------------------------------
<div className="">
      <NavOpctiones />
      <div className="container">

        <div className="col-md-12">
          <div className="row">

            <Router>
              <Link to="/">Inicio</Link>
              <Link to="/AvisoDesconsolidacion">Aviso Desco</Link>
              <Link to="/TarjaPretarja">TarjaPretarja</Link>
              <Switch>
                <Route exact path="/TarjaPretarja" component={TarjaPretarja} />
                <Route exact path="/AvisoDesconsolidacion" component={AvisoDesco} />
              </Switch>
            </Router>

          </div>
        </div>
      </div>
    </div>
*/