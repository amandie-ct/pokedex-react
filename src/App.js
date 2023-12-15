import Wallpaper from './Wallpaper';
import Pokedex from './Pokedex';
import SinglePokemon from './SinglePokemon';
import './App.css';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Wallpaper/>
        <Router>
          <Route exact path="/" element={ <Pokedex/> } />
          <Route path="/pokemon/:id" element={ <SinglePokemon/> } />
        </Router>
    </BrowserRouter>
  );
}

export default App;
