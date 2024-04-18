import PokemonDAO from "../dao/pokemon.dao.js";

 export function getPokemonById(req, res){
   let id = req.params.id;
   let pokemon = PokemonDAO.getById(id);

   if(pokemon){
    res.send({status:200, data:pokemon});
   } else{
     res.status(404).send({status:404});
   }

   let pokemons = PokemonDAO.list(id);
   res.send({status:200, data:pokemon});
 }

 export function addPokemon(req, res) {
  let{name, level, user_id} = req.body;
  PokemonDAO.add(user_id, name, level);
  res.status(201).send({status:201});
 }





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