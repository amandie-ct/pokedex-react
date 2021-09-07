
const CategoryButton = ({poketype, catId, fetchByType}) => {

    return (
        <button id="category-buttons" className={poketype.name} onClick={() => { fetchByType && fetchByType(catId) }}>
            <img alt="type icons" className="icon-types" src={`/assets/${poketype.name}.svg`}/>
            {poketype.name}
        </button>
    );
}
 
export default CategoryButton;