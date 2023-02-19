import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <PersonalForm { ...props } /> } />
        <Route
          path="/professionalform"
          render={ (props) => <ProfessionalForm { ...props } /> }
        />
        <Route path="/formdisplay" component={ FormDataDisplay } />
      </Switch>
    );
  }
}

export default App;
