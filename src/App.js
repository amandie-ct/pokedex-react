import Wallpaper from './Wallpaper';
import Pokedex from './Pokedex';
import SinglePokemon from './SinglePokemon';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Wallpaper/>
        <Switch>
          <Route exact path="/">
            <Pokedex/>
          </Route>
          <Route path="/pokemon/:id">
            <SinglePokemon/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
