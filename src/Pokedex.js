import { useEffect } from "react";
import Pokelist from "./Pokelist";
import { useState } from "react";
import ButtonsBackground from "./ButtonsBackground";

const Pokedex = () => {

    const [pokemonList, setPokemonList] = useState(null);
    const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
    const [nextPokemon, setNextPokemon] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // pegar a lista de objetos (pokemons) da API e armazenar numa lista
    // o set next pokemon é pra utilizar com o scroll infinito

    const getPokemonList = (url) => {
        fetch(url)
        .then(res => {
            if (!res.ok){
                throw Error('Não foi possível encontrar o conteúdo');
            }
            return res.json()
        })
        .then(data => {
            setPokemonList(data.results);
            setNextPokemon(data.next);
            setIsPending(false);
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    // somente na primeira vez que a página carrega, é feita a requisição pra API e a lista armazenada
    useEffect(() => {
        getPokemonList(pokemonEndpoint);
    }, []);

    // endpoint das categorias de pokemon pŕa colocar nos botões
    const fetchPokemonListByType = (typeId) => {
        fetch(`https://pokeapi.co/api/v2/type/${typeId}`)
            .then(res => {
                if (!res.ok){
                    throw Error('Não foi possível encontrar o conteúdo');
                }
                return res.json()
            })
            .then(data => {
                setPokemonList(data.pokemon.map((item) => item.pokemon))
                setIsPending(false);
                setNextPokemon(null);
            })
            .catch(err => {
                console.log(err.message)
            });
    }

    // deselecionar a categoria, e resetar a lista de pokemons exibida na página
    const clearCategoryFilter = () => {
        getPokemonList(pokemonEndpoint);
    }

    // carregar mais pokemons a medida que a página é rolada
    const loadMorePokemon = () => {
        if (nextPokemon) {
            fetch(nextPokemon)
            .then(res => {
                if (!res.ok){
                    throw Error('Não foi possível encontrar o conteúdo');
                }
                return res.json()
                })
            .then(data => {
                setPokemonList([...pokemonList, ...data.results])
                setNextPokemon(data.next)
            });
        }

    }

    // enquanto next pokemon não for null, adicionar mais pokemons na página
    const hasMorePokemon = (nextPokemon !== null);

    return (
        <div className="pokedex-container">
            <main className="pokedex-main">
                <ButtonsBackground clearCategoryFilter={clearCategoryFilter} 
                fetchByType={fetchPokemonListByType}/>
                
                {isPending ? <div className="spining-pokeball">
                        <img id="loading-icon" src={"./assets/pokeball.png"} alt="rolling pokeball"/>
                    </div> :
                <Pokelist pokemonList={pokemonList} loadMorePokemon={loadMorePokemon} 
                hasMorePokemon={hasMorePokemon}/>}
            </main>
        </div>
    );
}

export default Pokedex;