import React, { Component } from "react";
import PersonalForm from "../PersonalForm/PersonalForm";
import verifyForm from "../../helpers/verifyForm";
import './Form.css';

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
      submit: false
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

  showInformationsForm = () => {
    const { name, email, cpf, endereco, cidade, estado, tipo } = this.state;
    return (
      <div className="show-form">
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {endereco}</p>
        <p>Cidade: {cidade}</p>
        <p>Estado: {estado}</p>
        <p>Tipo: {tipo}</p>
      </div>
    )
  }

  changeSubmit = () => {
    const { errors } = this.state;
    if (errors.length === 0) {
      this.setState({ submit: true });
    } else {
      this.setState({ submit: false });
    }
  }

  validateForm = (event) => {
    event.preventDefault();
    this.setState({ errors: verifyForm(this.state) }, () => this.changeSubmit());
  }

  render() {
   return (
     <div className="formAll">
       <form action="">
          <PersonalForm value={this.state} handleChange={this.handleChange} onBlurHandler={this.onBlurHandler} />
          <button type="submit" onClick={(event) => this.validateForm(event)}>Enviar</button>
       </form>
        {this.state.submit && <>{this.showInformationsForm()}</>}
     </div>
   )
  }
}

export default Form;
