import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from '../Reader';
import publications from '../publications.json'

const App = () => (
    <Switch>
      <Route path='/reader' render={props => <Reader {...props} items={publications} />} />
      <Redirect to='/reader' />
    </Switch>
)
  
export default App;