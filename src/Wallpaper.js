import Pokedex from "./Pokedex";

const Wallpaper = () => {
    return (
        <div className="container">
            <header className="wallpaper-header">
                <img src="/logo.png" id="wallpaper-logo" alt="Pokemon logo and background"></img>
            </header>
            <Pokedex/>
        </div>
);
}
 
export default Wallpaper;