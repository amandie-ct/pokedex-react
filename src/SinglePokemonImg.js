const SinglePokemonImg = ({ id, pokemonName }) => {
    const idAdapter = (id) => {
        if (id.length === 1) {
            id = '00' + id;
        }
        if (id.length === 2){
            id = '0' + id;
        }
        return id;
    }

    let imgStr = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idAdapter(id)}.png`
    return (  
        
        <img id="single-pokemon-img" src={imgStr} alt={`Pokemon ${pokemonName}`}/>
)}
 
export default SinglePokemonImg;