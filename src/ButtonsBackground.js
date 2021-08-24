import { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton"

const ButtonsBackground = ({fetchByType, clearCategoryFilter}) => {
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
        <nav id="navbar">
            <h1>Filter by</h1>
            <div id="buttons-box">
                {pokemonType && pokemonType.results.map((type, index) => {
                    return <CategoryButton poketype={type} key={index} catId={index+1} fetchByType={fetchByType} />
                })}
                <button id="clear-search-button" onClick={clearCategoryFilter}>Clear</button>
            </div>
        </nav>
    );
}
 
export default ButtonsBackground;