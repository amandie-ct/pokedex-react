const Stats = ({stat}) => {

    let widthPercentage = stat.base_stat/2;

    return (
        <section>
                <div id="stat-name">
                    <span>{stat.stat.name}</span>
                    <span id="stat-num">{stat.base_stat}</span></div>
                <div id="stat-container">
                    <div style={{width: `${widthPercentage}%`}}id="stat"></div>
                </div>
        </section>

     );
}
 
export default Stats;