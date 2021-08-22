import PokemonMini from "./PokemonMini";

const Pokelist = ({pokemonlist}) => {

    return (
        <ol className="pokelist-lista-pokemons">
            {pokemonlist.results.map((pokemon, index) => {
                return <PokemonMini pokemonData={pokemon} key={index}/>
            })}
        </ol>
    );
}
 
export default Pokelist;