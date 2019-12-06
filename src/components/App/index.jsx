import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Reader from '../Reader';
import publications from '../publications.json'

const App = () => (
  <Router basename='/'>
    <Switch>
      <Route path='/reader' render={props => <Reader {...props} items={publications} />} />
      <Redirect to='/reader' />
    </Switch>
  </Router>
)
  
export default App;