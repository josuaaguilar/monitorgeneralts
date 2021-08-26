import { useEffect, useState } from "react"
import { getUsuarios } from "./Helpers/GetUsuarios"
import IUsuario from "../Interfaces/IUsuario";
export default function Usuarios(){    
    const [users,setUsers] = useState<IUsuario[]>();
    const requestUsers = () => {
        getUsuarios().then((usuarios) => {
            setUsers(usuarios);
        })
    }
    console.log(users)
    useEffect(() => {
        requestUsers();
    },[])
    return(
        <div className="container">
            <div className="card p-1">
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">e-mail</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Codigo postal</th>
                            <th scope="col">Compañía</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Lectura</th>
                            <th scope="col">Escritura</th>
                            <th scope="col">Actualizacion</th>
                            <th scope="col">Acceso Remoto</th>
                            <th scope="col">Eliminacion</th>
                            <th scope="col">Asigna Permisos</th>

                        </tr>
                    </thead>
                    <tbody>
                    {users?.map((usuario:IUsuario) => (
                    <tr className="table-active" key={usuario.id}>
                        <th scope="row">{usuario.id}</th>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.address.city}</td>
                        <td>{usuario.address.zipcode}</td>
                        <td>{usuario.company.name}</td>
                        <td><span className={"badge bg-"+(usuario.rol === "Admin" ? "success":"warning")}>{usuario.rol}</span></td>
                        <td><span className={"badge bg-"+(usuario.permisos.lectura ? "success":"danger")}>{usuario.permisos.lectura ? 'Si':'No'}</span></td>
                        <td><span className={"badge bg-"+(usuario.permisos.escritura ? "success":"danger")}>{usuario.permisos.escritura ? 'Si':'No'}</span></td>
                        <td><span className={"badge bg-"+(usuario.permisos.actualizacion ? "success":"danger")}>{usuario.permisos.actualizacion ? 'Si':'No'}</span></td>
                        <td><span className={"badge bg-"+(usuario.permisos.accesoRemoto ? "success":"danger")}>{usuario.permisos.accesoRemoto ? 'Si':'No'}</span></td>
                        <td><span className={"badge bg-"+(usuario.permisos.eliminacion ? "success":"danger")}>{usuario.permisos.eliminacion ? 'Si':'No'}</span></td>
                        <td><span className={"badge bg-"+(usuario.permisos.puedeAsignarPermisos ? "success":"danger")}>{usuario.permisos.puedeAsignarPermisos ? 'Si':'No'}</span></td>
                    </tr>))}
                    </tbody>
                </table> {/* termina tabla */}
                </div>
        </div>
    ) //Retorna JSX
}