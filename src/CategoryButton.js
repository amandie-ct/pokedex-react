const CategoryButton = ({poketype}) => {
    // const setClassName = (element, classname) => {
    //     return element.setAttribute('className', classname);
    // }
    // return (
    //         <button id="category-buttons" {setClassName(button, poketype)}>{poketype.name}</button>
    // );

    return (
        <button id="category-buttons" className={poketype.name}>{poketype.name}</button>
);
}
 
export default CategoryButton;