import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/Home';
import MinePage from './pages/mine/Mine';
import DetailPage from './pages/detail/Detail';
import { CatchedPokemonContext } from './stores/CatchedPokemon';
import { useEffect, useState } from 'react';
import { CatchedPokemonInterface } from './interfaces/CatchedPokemon';
import CatchPage from './pages/catch/Catch';
import { getCatchedPokemons } from './storages/CatchedPokemon';

function App() {
  const [ CatchedPokemon, setCatchedPokemon ] = useState<CatchedPokemonInterface[]>([]);

  useEffect(() => {
    getCatchedPokemons().then(data => {
      setCatchedPokemon(data);
    })
  }, [0]);

  return (
    <Router>
      <CatchedPokemonContext.Provider value={CatchedPokemon}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/mine">
            <MinePage />
          </Route>
          <Route exact path="/detail/:id/:catchedId">
            <DetailPage />
          </Route>
          <Route exact path="/catch/:id">
            <CatchPage />
          </Route>
        </Switch>
      </CatchedPokemonContext.Provider>
    </Router>
    
  );
}

export default App;
