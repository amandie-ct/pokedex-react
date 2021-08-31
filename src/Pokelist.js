import InfiniteScroll from "react-infinite-scroll-component";
import PokemonMini from "./PokemonMini";

const Pokelist = ({pokemonList, loadMorePokemon, hasMorePokemon}) => {


    return (
        <InfiniteScroll dataLength={pokemonList.length} next={() => {loadMorePokemon()}} 
            hasMore={hasMorePokemon}>

            <ol className="pokelist-lista-pokemons">
                {pokemonList.map((pokemon, index) => {
                    return <PokemonMini pokemonData={pokemon} key={index}/>
                })}
            </ol>
        </InfiniteScroll>
    );
}
 
export default Pokelist;