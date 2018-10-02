import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './index.css';
import Header from '../Header';

import Photos from '../Photos'

const App = () => (
    <div className="App">
      <Header />
      <section>
        <Switch>
          <Route exact path="/" render={props => <Redirect to="/photos" />} />
          <Route path="/photos" component={Photos} />
        </Switch>
      </section>
    </div>
  )

export default App
