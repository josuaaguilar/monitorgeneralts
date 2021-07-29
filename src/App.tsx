import React, { Fragment, useRef, useState } from "react";

type ElementFormEvent = React.FormEvent<HTMLFormElement>
//type 

interface IUser {
  name:string;
  active:boolean
}

function App() {
  //                     useState<tipoDato>("")
  const [newUser,setNewUser] = useState<string>('');
  const [users,setUsers] = useState<IUser[]>([]);
  const userInput = useRef<HTMLInputElement>(null);
  const [filter,setFilter] = useState<IUser[]>([])

  const Register = (e : ElementFormEvent) => {
    //console.log(e)
    e.preventDefault();
    addUsuer(newUser)
    setNewUser('')
    userInput.current?.focus();
  }

  const addUsuer = (name : string) : void  => {
    const newUsers : IUser[]= [...users, {name, active: true}];
    setUsers(newUsers);
  }
  const activateUsuer = (index:number) => {
    const newUser : IUser[] = [...users];
    if(newUser[index].active === true){
      alert("El usuario: "+users[index].name+ " se encuentra activo!")
    } else{
      newUser[index].active = true;
      setUsers(newUser)
    }
  }
  const desactivateUser = (index:number) : void => {
    const newUser : IUser[] = [...users]
    if(newUser[index].active){
      newUser[index].active = false;
      setUsers(newUser);
    }else {
      alert("El usuario " + newUser[index].name + " está inactivo!")
    }   
  };
  const handlechangeBuscarUsuariosActivos = (e:string) : void => {
    const filterUser : IUser[] = [...users]
    filterUser.filter((item:IUser) => item.name.startsWith(e))
    setFilter(users.filter((item:IUser) => item.name.startsWith(e)))
  }
  const handleClick = () => {

    console.log("Solicitar todos")
    return <h1>He solicitado todos</h1>
  }
  
  return (
    <>
    <h1>Registra tus usuarios!</h1>
    <form onSubmit={Register}>
      <input 
      onChange={e => setNewUser(e.target.value)}
      value={newUser}
      required
      ref={userInput} />
      <button>Registrar!!!</button>      
    </form>
    <form>
      <h2>Buscar usuarios activos</h2>
      <input onChange={e => handlechangeBuscarUsuariosActivos(e.target.value)}/>
    </form>
    {filter.map((user : IUser,index : number) => (
      <Fragment key={index}>
      <h2 key={index}>{user.name} - Estado: {(user.active ? 'Activo' :'Inactivo')}</h2>
        <>
        <button onClick={() => activateUsuer(index)}>Activar</button>
        <button onClick={() => desactivateUser(index)}>Desactivar</button>
        </>
      </Fragment>
    ))}
      <><br/>
        <button onClick={handleClick}>Solicitar todos!</button>
        {}
      </>    
    </>
  );
}
export default App;
