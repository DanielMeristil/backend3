import UsersDAO from "../daos/users.dao.js";

 export function login(req, res){

 let{user, pwd} = req.body;
 let exists = UsersDAO.exists(user, pwd)
if(exists){
    res.send({status:200});
}else{
    res.status(400).send({status:400});
}
}

export function register(req, res){
}

export function login(req, res){

    let{user, pwd} = req.body;
    UsersDAO.create(user, pwd)
       res.status(201).send({status:201});
 
   }