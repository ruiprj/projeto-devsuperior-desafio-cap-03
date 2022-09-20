import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GitHubSearch from 'pages/GitHubSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      
      <Route path="/githubsearch">
        <GitHubSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
