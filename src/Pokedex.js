import { useEffect } from "react";
import Pokelist from "./Pokelist";
import { useState } from "react";
import ButtonsBackground from "./ButtonsBackground";

const Pokedex = () => {

  
    const [pokemonList, setPokemonList] = useState(null);
    // const [offset, setOffset] = useState(0);

    const getPokemonList = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPokemonList(data.results);
        })
    }

    useEffect(() => {
        getPokemonList();
    }, []);

    const fetchPokemonListByType = (typeId) => {
        fetch(`https://pokeapi.co/api/v2/type/${typeId}`)
            .then(res => res.json())
            .then(data => {
                setPokemonList(data.pokemon.map((item) => item.pokemon))
            });
    }

    const clearCategoryFilter = () => {
        getPokemonList();
    }

    return (
            <main className="pokedex-main">
                <ButtonsBackground clearCategoryFilter={clearCategoryFilter} fetchByType={fetchPokemonListByType}/>
                {pokemonList &&  <Pokelist pokemonlist={pokemonList}/>}
            </main>
    );
}
 
export default Pokedex;