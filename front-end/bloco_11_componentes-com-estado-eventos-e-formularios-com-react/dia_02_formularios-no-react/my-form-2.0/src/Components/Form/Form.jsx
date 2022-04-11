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
    }
  }

  handleChange = (event) => {
    const { name } = event.target;
    const value = event.target === 'checkbox' ? event.target.checked : event.target.value;
    console.log(value);
    this.setState({ [name]: value });
  }

  render() {
   return (
     <div>
       <form action="">
          <PersonalForm value={this.state} handleChange={this.handleChange} />
       </form>
     </div>
   )
  }
}

export default Form;
