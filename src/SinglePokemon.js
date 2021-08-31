import Stats from "./Stats";
import SinglePokemonImg from "./SinglePokemonImg";
import Characteristics from "./Characteristics";
import MainInfo from "./MainInfo";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const SinglePokemon = () => {

    const [baseExperience, setBaseExperience] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [abilities, setAbilities] = useState(null);
    const { id } = useParams();
    const [pokemonImg, setImg] = useState(null);
    const [pokemonNumber, setPokemonNumber] = useState(null);
    const [pokemonName, setPokemonName] = useState(null);
    const [stats, setStats] = useState(null);

    let baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    const getSinglePokemon = (url) => {
        fetch(url)
        .then(res => {
            if (!res.ok){
                throw Error('Não foi possível encontrar o conteúdo');
            }
            return res.json()
        })
        .then(data => {
            setBaseExperience(data.base_experience);
            setHeight(data.height);
            setWeight(data.weight);
            setImg(data.sprites.front_default);
            setPokemonName(data.name);
            setPokemonNumber(data.id);
            setStats(data.stats);
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    
    useEffect(() => {
        getSinglePokemon(baseUrl);
    }, [])

    return (
        <div className="pokedex-main">
            <div className="pokedex-single">
                <MainInfo pokemonName={pokemonName} pokemonNumber={pokemonNumber}/>
                <SinglePokemonImg singleImg={pokemonImg}/>
                <Characteristics baseExperience={baseExperience} height={height} weight={weight}
                abilities={abilities}/>
                <div class="statistics">
                    {stats && stats.map((stat) => {
                        return <Stats stat={stat}/>
                    })}
                </div>
            </div>
        </div>

    );
}
 
export default SinglePokemon;