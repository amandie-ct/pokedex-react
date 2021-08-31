
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PokemonMini = ({pokemonData}) => {

    let pokeUrl = pokemonData.url.split('/');
    let id = pokeUrl[pokeUrl.length-2];

     return (
        <div className="pokemonmini-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
            alt="pokemon" id="mini-img"/>
            <div className="mini-details">
                <p id="number">#{id}</p>
                <p id="name">{pokemonData.name}</p>
            </div>
            <button><Link to={`/pokemon/${id}`}><FontAwesomeIcon icon={faChevronRight}/></Link></button>
        </div>
    );
}

export default PokemonMini;
