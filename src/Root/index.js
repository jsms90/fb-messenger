import React from 'react'
import './Root.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Photos from '../Photos'

const Root = () => (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to My Photo App!</h1>
      </header>
      <section>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Redirect to="/photos" />} />
            <Route path="/photos" component={Photos} />
          </Switch>
        </Router>
      </section>
    </div>
  )

export default Root
