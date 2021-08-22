import { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton"

const ButtonsBackground = () => {
    const [pokemonType, setPokemonType] = useState(null);
    
    useEffect (() => {
        fetch('https://pokeapi.co/api/v2/type/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setPokemonType(data);
        })
    }, []);

    return (
        <nav>
            {pokemonType && pokemonType.results.map((type, index) => {
                return <CategoryButton poketype={type} key={index}/>
            })}
            <button id="clear-search-button">Clear</button>
        </nav>
    );
}
 
export default ButtonsBackground;