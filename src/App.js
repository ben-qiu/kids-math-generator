import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MathPage from './pages/MathPage'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/grade/:year/:mathType">
          <MathPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
