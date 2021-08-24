import { useEffect, useState } from "react";

const CategoryButton = ({poketype, typeId}) => {

    const typeUrl = 'https://pokeapi.co/api/v2/type/';

    const getCategoryDetails = (typeUrl, typeId) => {
        fetch(typeUrl + typeId)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
    }

    // useEffect (() => {
        
    // }, []);

    return (
        <button id="category-buttons" className={poketype.name} onClick={() => { getCategoryDetails(typeUrl, typeId) }}>
            <img alt="type icons" className="icon-types" src={`/assets/${poketype.name}.svg`}/>
            {poketype.name}
        </button>
    );
}
 
export default CategoryButton;