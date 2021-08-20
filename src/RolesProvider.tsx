import React from "react"
import PanelPrincipal from "./Componentes/Permisos/PanelPrincipal"

const Permisos = {
    administrador: {
        canRead: true,
        canWrite: true,
        canDelete: true,
        canUpdate: true
    },
    superUsuario: {
        canRead: true,
        canWrite: true,
        canDelete: false,
        canUpdate: true
    },
    user: {
        canRead: true,
        canWrite: true,
        canDelete: false,
        canUpdate: false
    },
    guest: {
        canRead: true,
        canWrite: false,
        canDelete: false,
        canUpdate: false
    }
}
type eventFormElement = React.FormEvent<HTMLFormElement>
export const PermisosContext = React.createContext(Permisos.guest)
let NuevoPermiso = Permisos.guest;

function RolesProvider() {
    return (
        <div className="container">
            <PermisosContext.Provider value={Permisos.guest} >
                <PanelPrincipal />
            </PermisosContext.Provider>
        </div>
    )
}

/* function PanelPrincipal(props: any) {
    return (
        <PermisosButton></PermisosButton>
    )
} 

function PermisosButton() {
    const Permiso = useContext(PermisosContext)
    return (
        <div className="form">
            <h1>Probando los permisos</h1>
            <h2>Permiso de Lectura</h2>
            {Permiso.canRead ? (<label>Tengo permiso para leer</label>) : (<textarea>No tengo permiso para leer</textarea>)}
            <h2>Permiso de Eescritura:</h2>
            {Permiso.canWrite ? (<input />) : (<input disabled />)}
            <h2>Permiso para Actualizar</h2>
            {Permiso.canUpdate ? (<button>Actualizar!</button>) : (<button disabled>Actualizar!</button>)}
            <h2>Permiso para Eliminar</h2>
            {Permiso.canDelete ? (<button>Eliminar</button>) : (<button disabled>Eliminar!</button>)}
        </div>
    )
}*/

export default RolesProvider;