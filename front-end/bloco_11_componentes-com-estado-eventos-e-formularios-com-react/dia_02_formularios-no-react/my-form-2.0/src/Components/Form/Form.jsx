import React, { Component } from "react";
import PersonalForm from "../PersonalForm/PersonalForm";
import verifyForm from "../../helpers/verifyForm";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      tipo: "",
      errors: "",
    }
  }

  handleChange = (event) => {
    const { name } = event.target;
    const value = event.target === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: event.target.name === 'name' ? value.toUpperCase() : value });
  }

  onBlurHandler = (event) => {
    let { name, value } = event.target;

    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;

    this.setState({ [name]: value });
  }

  validateForm = (event) => {
    event.preventDefault();
    this.setState({ errors: verifyForm(this.state) });
  }

  render() {
   return (
     <div>
       <form action="">
          <PersonalForm value={this.state} handleChange={this.handleChange} onBlurHandler={this.onBlurHandler} />
          <button type="submit" onClick={(e) => this.validateForm(e)}>Enviar</button>
       </form>
     </div>
   )
  }
}

export default Form;
