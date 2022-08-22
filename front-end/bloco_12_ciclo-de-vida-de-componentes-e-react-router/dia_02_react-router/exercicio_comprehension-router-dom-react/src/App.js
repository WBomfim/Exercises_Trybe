import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/strict-access" render={ () => <StrictAccess username="joao" password="1234" />} />
          <Route path="/users/:id" render={ (props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Link to="/">Home</Link>
        <hr/>
        <Link to="/about">About</Link>
        <hr/>
        <Link to="/users">Users</Link>
        <hr/>
        <Link to="/strict-access">Strict Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;
