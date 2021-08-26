import InfiniteScroll from "react-infinite-scroll-component";
import PokemonMini from "./PokemonMini";

const Pokelist = ({pokemonlist, loadMorePokemon, hasMorePokemon}) => {


    return (
        <InfiniteScroll dataLength={pokemonlist.length} next={() => {loadMorePokemon()}} 
            hasMore={hasMorePokemon}>

            <ol className="pokelist-lista-pokemons">
                {pokemonlist.map((pokemon, index) => {
                    return <PokemonMini pokemonData={pokemon} key={index}/>
                })}
            </ol>
        </InfiniteScroll>
    );
}
 
export default Pokelist;