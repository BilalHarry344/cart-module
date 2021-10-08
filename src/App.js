import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartModule from './pages/CartModule';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`/`} exact component={CartModule} />
      </Switch>
    </Router>
  );
}

export default App;
