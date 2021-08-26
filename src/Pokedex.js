import { useEffect } from "react";
import Pokelist from "./Pokelist";
import { useState } from "react";
import ButtonsBackground from "./ButtonsBackground";

const Pokedex = () => {

    const [pokemonList, setPokemonList] = useState(null);
    const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
    const [nextPokemon, setNextPokemon] = useState(null);

    const getPokemonList = (url) => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPokemonList(data.results);
            setNextPokemon(data.next);
        })
    }

    useEffect(() => {
        getPokemonList(pokemonEndpoint);
    }, []);

    const fetchPokemonListByType = (typeId) => {
        fetch(`https://pokeapi.co/api/v2/type/${typeId}`)
            .then(res => res.json())
            .then(data => {
                setPokemonList(data.pokemon.map((item) => item.pokemon))
            });
    }

    const clearCategoryFilter = () => {
        getPokemonList(pokemonEndpoint);
    }

    const loadMorePokemon = () => {
        fetch(nextPokemon)
        .then(res => {
            return res.json()
            })
        .then(data => {
            setPokemonList([...pokemonList, ...data.results])
            setNextPokemon(data.next)
        });
    }

    const hasMorePokemon = (nextPokemon !== null);

    return (
            <main className="pokedex-main">
                <ButtonsBackground clearCategoryFilter={clearCategoryFilter} fetchByType={fetchPokemonListByType}/>
                {pokemonList &&  
                <Pokelist pokemonlist={pokemonList} loadMorePokemon={loadMorePokemon} hasMorePokemon={hasMorePokemon}/>}
            </main>
    );
}
 
export default Pokedex;