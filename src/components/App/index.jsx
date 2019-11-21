import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Reader from '../Reader';
import publications from '../publications.json'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/reader' render={props => <Reader {...props} items={publications} />} />
      <Redirect to='/reader' />
    </Switch>
  </BrowserRouter>
)
  
export default App;