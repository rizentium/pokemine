import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/Home';
import MinePage from './pages/mine/Mine';
import DetailPage from './pages/detail/Detail';
import { CatchedPokemonContext, getCatchedPokemons } from './stores/CatchedPokemon';
import { useEffect, useState } from 'react';
import { CatchedPokemonInterface } from './interfaces/CatchedPokemon';
import CatchPage from './pages/catch/Catch';

function App() {
  const [ CatchedPokemon, setCatchedPokemon ] = useState<CatchedPokemonInterface[]>([]);

  useEffect(() => {
    const loadCatchedPokemon = async () => {
      const data = await getCatchedPokemons();
      setCatchedPokemon(data);
    }
    loadCatchedPokemon();
  }, [CatchedPokemon])

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
