import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieCatalog from 'pages/Private/MovieCatalog';
import MovieDetails from 'pages/Private/MovieDetails';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />

    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
