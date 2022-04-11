import React, { Component } from "react";
import ErrorForm from "../ErrorForm/ErrorForm";
import './PersonalForm.css'

class PersonalForm extends Component {
  render() {
    const { value, handleChange} = this.props;

    return (
      <div className="PersonalForm">
        <h2>Informações Pessoais</h2>
        <fieldset>
        <ErrorForm error={value.error}/>
          <label>
            Name:
            <input
              type="text" 
              name="name"
              value={value.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text" 
              name="email"
              value={value.email}
              onChange={handleChange}
            />
          </label>
          <label>
            CPF:
            <input
              type="text" 
              name="cpf"
              value={value.cpf}
              onChange={handleChange}
            />
          </label>
          <label>
            Endereço:
            <input
              type="text" 
              name="endereco"
              value={value.endereco}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              type="text" 
              name="cidade"
              value={value.cidade}
              onChange={handleChange}
            />
          </label>
          <label>
            Estado:
            <select
             name="estado"
             value={value.estado}
             onChange={handleChange}            
            >
              <option value="">Selecione</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </label>
          <label>
            <input
             type="radio" 
             name="tipo"
             value="Casa"
             onChange={handleChange}
            />
             Casa
          </label>
          <label>
            <input
             type="radio" 
             name="tipo"
             value="Apartamento"
             onChange={handleChange}
            />
            Apartamento
          </label>
        </fieldset>
      </div>
    )
  }
}

export default PersonalForm;
