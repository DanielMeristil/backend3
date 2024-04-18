import  { addUser, userExists }  from "../services/persistence.js";
export default class Users{

    user = [];

    static exists(user, pwd){
        userExists(user, pwd)
    }
    static create(user, pwd){
        addUser(user, pwd)
    }
}
