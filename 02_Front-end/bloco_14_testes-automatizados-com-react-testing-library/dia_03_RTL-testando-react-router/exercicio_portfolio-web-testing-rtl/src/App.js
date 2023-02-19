import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Meu portifólio</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/contact">Contato</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/projects" component={ Projects } />
          <Route path="/contact" component={ Contact } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
