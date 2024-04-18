import  express  from "express";
import {getPokemonById, listallPokemon, addPokemon} from "../controllers/pokemons.controller.js";

const router = express.Router();

router.get("/:id", getPokemonById);
router.get("/", listallPokemon);
router.post("/", addPokemon);


export default router;