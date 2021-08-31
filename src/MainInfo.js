const MainInfo = ({pokemonName, pokemonNumber}) => {
    return (
        <section className="characteristics">
            <h2>#{pokemonNumber}</h2>
            <h1 id="single-name">{pokemonName}</h1>
            {/* <button>Categoria</button> */}
        </section>
    );
}
 
export default MainInfo;