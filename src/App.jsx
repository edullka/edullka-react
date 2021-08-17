import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Home from './components/Home';
import Informacion from './components/Informacion';
import Nabvar from './components/Nabvar';

function App() {
  return (
    <>
      <Router>
        <Nabvar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/campamentos/:nombre" children={<Informacion />} />
          {/* <Route path="/inscripcion/:nombre" children={<Formulario />} /> */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
