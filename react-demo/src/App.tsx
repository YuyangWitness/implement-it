import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import MyHeader from './components/myHeader';
import Dashboard from './pages/dashboard'
import ObjectScale from './pages/objectscale';
import Settings from './pages/settings';
import Accounts from './pages/accounts';
import ObjectStore from './pages/objectstore';

function App() {
  return (
    <Router>
      <MyHeader />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/accounts">
          <Accounts />
        </Route>
        <Route path="/objectstore">
          <ObjectStore />
        </Route>
        <Route path="/objectscale">
          <ObjectScale />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
