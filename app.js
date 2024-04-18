import express from "express";
import userRouter from "./routers/users.router.js";
import pokemonRouter from "./routers/pokemon.router.js";

const app = express();

app.use(express.json());
app.use("/users",userRouter);
app.use("/pokemon",pokemonRouter);

app.listen(3000,()=>{
    console.log("App funtionando ");
})