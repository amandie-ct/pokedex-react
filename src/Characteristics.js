const Characteristics = ({baseExperience, height, weight, abilities}) => {
    return (
        <section className="characteristics">
            <h3>Characteristics</h3>
            <p>Base experience:&nbsp;<span>{baseExperience}</span></p>
            <hr className="horizontal-rule"></hr>
            <p>Height:&nbsp;<span>{height/10}&nbsp;m</span></p>
            <hr className="horizontal-rule"></hr>
            <p>Weight:&nbsp;<span>{weight/10}&nbsp;kg</span></p>
            <hr className="horizontal-rule"></hr>
            <p>Abilities:</p>
                <div className="ability-container">
                    {abilities && abilities.map((ability) => {
                        return <div className="ability">{ability.ability.name}</div>
                    })}
                </div>
        </section>
    );
}
 
export default Characteristics;