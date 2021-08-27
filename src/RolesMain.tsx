import { LoginButton } from './Componentes/Login';
import { useAuth0 } from '@auth0/auth0-react';
import NavOpctiones from './Componentes/NavOpciones';
function RolesMain() {
    const { isAuthenticated } = useAuth0();
    return (
        <div>

            { isAuthenticated ? <NavOpctiones/> : <LoginButton/> }
        </div>
    )
}
export default RolesMain;

/* import Referencias from './Componentes/Referencias'
import AvisoDesconsolidacion from "./Componentes/AvisoDesconsolidacion"
import TarjaPretarja from "./Componentes/TarjaPretarja"
import { Component } from "react"; */
//import Need from "./Need";

//const { CredentialProvider } = require('react-rbac-guard');
//const { guardFactory } = require("react-rbac-guard");

/* ------------------------------------------------------- 
const NeedManagePost = new Need("CanManagerPost");
const NeedManageUser = new Need("CanManageUser");
const NeedManageComment = new Need("CanManageComment");

/* -------------------------------------------------------
const CommentManager = guardFactory(NeedManageComment)
const UserManager = guardFactory(NeedManageUser)
const PostManager = guardFactory(NeedManagePost)
------------------------------------------------------- */
/* Validar si requiere rutas en este componente:
Route login
Route logout
Route Home */


    /* <CredentialProvider value= {credentials}>
                <CommentManager>
                    <TarjaPretarja/>
                </CommentManager>
                <UserManager>
                    <AvisoDesconsolidacion/>
                </UserManager>
                <PostManager>
                    <Referencias />
                </PostManager>
            </CredentialProvider> */


/*
<div>
                {/* <CredentialProvider>
                <PostManager>
                    <button>

                    </button>
                </PostManager>
                <CommentManager>
                    <button>Edit</button>
                    <button>Delete</button>
                </CommentManager>
                <UserManager>
                    <button>Block user</button>
                </UserManager>
            </CredentialProvider> }
            </div>
*/