import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Characters from './Pages/Characters'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/'>
          <Characters/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
