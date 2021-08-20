import React, { useContext } from "react";
import { PermisosContext } from "../../RolesProvider";

export default function PermisosButton() {
    const Permiso = useContext(PermisosContext);    
    return(
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
    );
}