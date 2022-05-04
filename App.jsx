import React from 'react';
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Account from './src/pages/Account';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/account' component={Account} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
