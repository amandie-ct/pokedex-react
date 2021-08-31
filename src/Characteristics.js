const Characteristics = ({baseExperience, height, weight, abilities}) => {
    return (
        <section className="characteristics">
            <h3>Characteristics</h3>
            <p><span>Base experience:&nbsp;</span>{baseExperience}</p>
            <hr className="horizontal-rule"></hr>
            <p><span>Height:&nbsp;</span>{height/10}</p>
            <hr className="horizontal-rule"></hr>
            <p><span>Weight:&nbsp;</span>{weight/10}</p>
            <hr className="horizontal-rule"></hr>
            {/* <p>Abilities:<span>{abilities}</span></p> */}
        </section>
    );
}
 
export default Characteristics;