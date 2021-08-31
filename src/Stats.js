const Stats = ({stat}) => {

    let widthPercentage = stat.base_stat;

    return (
        <section>
            <div>
                <div id="stat-name"><span>{stat.stat.name}</span><span>{stat.base_stat}</span></div>
                <div id="stat-container">
                    <div style={{width: `${widthPercentage}%`}}id="stat">''</div>
                </div>
           </div>
        </section>

     );
}
 
export default Stats;