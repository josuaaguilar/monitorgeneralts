const Requirement = require('react-rbac-guard/src/Requirement')
//import { Requirement } from "react-rbac-guard";
console.log(Requirement)

class RolController extends Requirement{
    permission;
    constructor(permission){
        super();
        this.permission = permission;
    }
    isStisfied(credentials){
        return true;
    }
}
export default RolController;