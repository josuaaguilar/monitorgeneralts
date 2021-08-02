import FormRegister from './FormRegister'
import CardResult from './CardResult'
import { useState } from 'react';
interface IUser {
    name:string;
    active:boolean;
}
function Col(props:any){
    const [users,setUsers] = useState([])
    const [user,setUser] = useState('')
    return(<div className="col-md-6 offset-md-3">
       <FormRegister /> {/* Agregar props para definir lo que viene en la siguiente jerarquía. */}
       <CardResult>
           
       </CardResult>
    </div>)     /**Retorna JSX */
}
export default Col;