import React from "react";
import { Route, Switch } from "react-router";

import NotFound from "./NotFound";
import Home from "./Home";
import TopBar from "./Layout/TopBar";
import Messenger from "./Messenger";
import Footer from "./Layout/Footer";
import Login from "./Login";
import Profile from "./Profile";

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/login" component={Login} />
      <div className="app">
        <TopBar userPosition="right" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/messages" component={Messenger} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Switch>
  </div>
);

export default App;
