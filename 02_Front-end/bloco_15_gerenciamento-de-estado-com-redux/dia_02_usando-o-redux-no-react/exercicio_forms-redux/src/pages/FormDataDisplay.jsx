import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      curriculo,
      cargo,
      descricao } = this.props;
    return (
      <div>
        <h2>Dados Enviados</h2>
        <div className="information">
          <strong>
            Nome:
          </strong>
          {' '}
          { nome }
        </div>
        <div className="information">
          <strong>
            Email:
          </strong>
          {' '}
          { email }
        </div>
        <div className="information">
          <strong>
            CPF:
          </strong>
          {' '}
          { cpf }
        </div>
        <div className="information">
          <strong>
            Endereço:
          </strong>
          {' '}
          { endereco }
        </div>
        <div className="information">
          <strong>
            Cidade:
          </strong>
          {' '}
          { cidade }
        </div>
        <div className="information">
          <strong>
            Estado:
          </strong>
          {' '}
          { estado }
        </div>
        <div className="information">
          <strong>
            Currículo:
          </strong>
          {' '}
          { curriculo }
        </div>
        <div className="information">
          <strong>
            Cargo:
          </strong>
          {' '}
          { cargo }
        </div>
        <div className="information">
          <strong>
            Descrição do Cargo:
          </strong>
          {' '}
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.pessoalReducer.nome,
  email: state.pessoalReducer.email,
  cpf: state.pessoalReducer.cpf,
  endereco: state.pessoalReducer.endereco,
  cidade: state.pessoalReducer.cidade,
  estado: state.pessoalReducer.estado,
  curriculo: state.professionalReducer.curriculo,
  cargo: state.professionalReducer.cargo,
  descricao: state.professionalReducer.descricao,
});

FormDataDisplay.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  curriculo: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(FormDataDisplay);
