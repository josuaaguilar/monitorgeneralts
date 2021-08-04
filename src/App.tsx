import React, { useRef, useState } from "react";
import CardResult from "./Componentes/CardTarjaPartida";

type ElementFormEvent = React.FormEvent<HTMLFormElement>
type ElementInputChangeEvent = React.ChangeEvent<HTMLInputElement>

interface IUser {
  name: string;
  active: boolean
}
/*
interface IResponse {
  id: number;
  name: string
}
interface ICivilizations {
  id: number,
  name: string,
  expansion: string
}
 {
  "civilizations": [
    {
      "id": 1, 
      "name": "Aztecs", 
      "expansion": "The Conquerors", 
      "army_type": "Infantry and Monk", 
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
      ], 
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars"
      ], 
      "team_bonus": "Relics generate +33% gold", 
      "civilization_bonus": [
        "Villagers carry +5", 
        "Military units created 15% faster", 
        "+5 Monk hit points for each Monastery technology", 
        "Loom free"
      ]
    }, 
    {
      "id": 2,  */

function App() {
  //                     useState<tipoDato>("")
  const [newUser, setNewUser] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [filter, setFilter] = useState<IUser[]>([])
  const userInput = useRef<HTMLInputElement>(null);
  //const [res, setRes] = useState([])

  const Register = (e: ElementFormEvent) => {
    e.preventDefault();
    addUsuer(newUser)
    setNewUser('')
    userInput.current?.focus();
  }

  const addUsuer = (name: string): void => {
    const newUsers: IUser[] = [...users, { name, active: true }];
    setUsers(newUsers);
    setFilter(newUsers)
  }
  const activateUsuer = (index: number) => {
    const newUser: IUser[] = [...users];
    if (newUser[index].active === true) {
      alert("El usuario: " + users[index].name + " se encuentra activo!")
    } else {
      newUser[index].active = true;
      setUsers(newUser)
    }
    userInput.current?.focus();
  }
  const desactivateUser = (index: number): void => {
    const newUser: IUser[] = [...users]
    if (newUser[index].active) {
      newUser[index].active = false;
      setUsers(newUser);
    } else {
      alert("El usuario " + newUser[index].name + " está inactivo!")
    }
    userInput.current?.focus();
  };
  const handlechangeBuscarUsuariosActivos = (e: string): void => {
    //const filterUser: IUser[] = [...users]
    //filterUser.filter((item:IUser) => item.name.startsWith(e))
    setFilter(users.filter((item: IUser) => item.name.toUpperCase().startsWith(e.toUpperCase())))
  }
  /* 
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header

    
  });

  JSON.stringify({Nombre:"TarjaPretarja", Valor:"",oValor:"122963"})
  http://10.10.80.210:8184/Reportes/RPretarja
  
    */
  const fetchApi = async () => {
    //const body = [{ Nombre: "nTarjaPretarja", Valor: "", oValor: "122963" }]
    console.log("Fetching")
    const data = await fetch('http://10.10.80.210:8184/Reportes/RPretarja', {
      method:'POST',
      mode:'no-cors',
      headers: {
        'Content-Type': 'appication/json'
      },
      body: JSON.stringify([{Nombre:'nTarjaPretarja',Valor:'',oValor:'122963'}])
    })
    .then(response => response.json())
    .then(data => console.log('success', data))
    .catch(err => console.log("Error: ", err));
    console.log(data)
    //const res = await data.json();
    //console.log(res)

    /* const data = await fetch("http://10.10.80.210:8184/Reportes/RPretarja" ,
       {
         method: "POST",
         mode:'cors',
         headers:{'Content-Type':'application/json; charset=utf-8'},
         body: '[{"Nombre" : "nTarjaPretarja","Valor" : "","oValor" : "122963"}]',
         referrerPolicy: 'strict-origin-when-cross-origin'
       } )*/


    //console.log(data);

    /* .then(res => {
      if (!res.ok) {
        console.log("No ok")
        console.log(res)
        //throw new Error(res.statusText)  
      } else{
      console.log("respuesta de red ok pero respuesta http no ok")}
      //res.json()
    }); */
    /* const res = await data.json();
    console.log(res) */

  }
/*
  const handleSolicitarTodos = async (e: ElementFormEvent) => {
    e.preventDefault();
    console.log("Solicitar todos")
    fetchApi();
    /*
    const data = await fetch("http://10.10.80.210:8184/Reportes/RPretarja",
     {
       method:"POST",
       mode: 'same-origin', 
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({"Nombre":"nTarjaPretarja","Valor":"","oValor":"122963"})
      } 
      );
     const res = await data.json();
    console.log(res)
    console.log(res.dsDatos)
    
    setRes(res.civilizations)
  } */

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mb-1">
            <div className="card-body">
              <form onSubmit={Register}>
                <h1>Registra tus usuarios!</h1>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => setNewUser(e.target.value)}
                  value={newUser}
                  required
                  autoFocus
                  ref={userInput} />
                <button className="btn btn-primary btn-block mt-2">Registrar!!!</button>
              </form>
            </div>
          </div> {/**Cierra div card Formulario*/}
          <div className="card mb-1">
            <div className="card-body">
              <form>
                <h1>Filtra los usuarios!</h1>
                <input className="form-control"
                  onChange={(e: ElementInputChangeEvent) => handlechangeBuscarUsuariosActivos(e.target.value)} />
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <form >
                <h1>Mostrar todos!</h1>

              </form>
              <button className="btn btn-outline-secondary" onClick={fetchApi}>Clic para mostrar todos!</button>
            </div>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Expancion</th>
                <th scope="col">Nombre</th>
                <th scope="col">Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <th scope="row">Succes</th>
                <td>contento</td>
              </tr>
            </tbody>

          </table>
          {filter.map((user: IUser, index: number) => (
            <div key={index} className={"card mb-3 mt-2 p-1 " + (user.active ? "border-success" : "border-danger")}>
              <div className="card-header">Usuario</div>
              <div className="card-body">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Status: {(user.active ? "Activo" : "Inactivo")}</p>
              </div>
              <button className="btn btn-outline-success mt-2" onClick={() => activateUsuer(index)}>Activar</button>
              <button className="btn btn-outline-danger mt-2" onClick={() => desactivateUser(index)}>Desactivar</button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
export default App;
/*
<>
      <h1>Registra tus usuarios!</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={Register}>
            <input
              type="text"
              className="form-control"
              onChange={e => setNewUser(e.target.value)}
              value={newUser}
              required
              ref={userInput} />
            <button>Registrar!!!</button>
          </form>
        </div>
      </div>
      <form>
        <h2>Buscar usuarios activos</h2>
        <input onChange={(e: ElementInputChangeEvent) => handlechangeBuscarUsuariosActivos(e.target.value)} />
      </form>
      {filter.map((user: IUser, index: number) => (
        <Fragment key={index}>
          <h2 key={index}>{user.name} - Estado: {(user.active ? 'Activo' : 'Inactivo')}</h2>
          <>
            <button onClick={() => activateUsuer(index)}>Activar</button>
            <button onClick={() => desactivateUser(index)}>Desactivar</button>
          </>
        </Fragment>
      ))}
      <>
        <br />
        <button onClick={handleClick}>Solicitar todos!</button>
        {res.map((item: IResponse) => (
          <div key={item.id}>
            <li>{item.name}</li>
          </div>

        ))}
      </>
    </>



*/