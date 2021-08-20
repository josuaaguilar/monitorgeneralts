//const {Requirement} = require('react-rbac-guard')
//import {Requirement} from 'react-rbac-guard'
//import * as  Requirement  from 'react-rbac-guard';
//import * = require('react-rbac-guard')
const {Requirement} = require('react-rbac-guard')
//console.log(Requirement)
class Need  extends Requirement{
    constructor(permission:string){
        super();
    /* constructor (){ */
        //super();
        this.permission = permission
    }
    /* isSatisfied(credentials:object) */
    isSatisfied(credentials:string){
         return credentials === this.permission ? true : false 
        //return true;
    }
    
}

export default Need