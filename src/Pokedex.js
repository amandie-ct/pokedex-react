import { useEffect } from "react";
import Pokelist from "./Pokelist";
import { useState } from "react";

const Pokedex = () => {
    
    const [pokemonList, setPokemonList] = useState(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPokemonList(data);
        })
    }, []);

    return (
        <main className="pokedex-main">
            {pokemonList &&  <Pokelist pokemonlist={pokemonList}/>}

        </main>
    );
}
 
export default Pokedex;