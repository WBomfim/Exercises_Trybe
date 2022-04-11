import React, { Component } from "react";
import PersonalForm from "../PersonalForm/PersonalForm";

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
      error: "",
    }
  }

  handleChange = (event) => {
    const { name } = event.target;
    const value = event.target === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: event.target.name === 'name' ? value.toUpperCase() : value });
  }

  validateForm = () => {
    
  }

  render() {
   return (
     <div>
       <form action="">
          <PersonalForm value={this.state} handleChange={this.handleChange} />
          <button type="submit">Enviar</button>
       </form>
     </div>
   )
  }
}

export default Form;
