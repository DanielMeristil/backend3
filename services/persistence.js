import uuid4 from "uuid4";
const users = [];
const pokemons = [];

export function addUser(user, pwd) {
    let id = uuid4();
   user.push({id, user, pwd});
   return id;
}

export function addPokemonV1(user_id, name, level) {
    pokemons.push({user_id, name, level});
    return id;
}

/*export function addPokemonV2(user_id, name, level){
let user = users.find(user => user.id === user.id);
user.pokemon.push({name, level});
user = user.filter(user => user.id != user_id)
user.push(user);
}
*/
export function getUser(user_id){
    return users.find(user = user.id === user_id);
}

export function userExists(username, pwd){
    return users.some(user => user.user === username && user.pwd ===pwd);
}
export function getPokemon(pokemon_id){
    return pokemons.find(pokemon => pokemon_id === pokemon_id);
}

export function getPokemonListOfUser(user_id){
    return pokemons.find(pokemon => pokemon.user_id === user_id);
}