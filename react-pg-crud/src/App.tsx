import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {Navbar} from './layout';
import {About, Home} from './pages';

function App() {
  return (
    <div id="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
