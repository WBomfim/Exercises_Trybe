export const PESSOAL_FORM = 'PESSOAL_FORM';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const pessoalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PESSOAL_FORM:
    return {
      nome: action.personalData.nome,
      email: action.personalData.email,
      cpf: action.personalData.cpf,
      endereco: action.personalData.endereco,
      cidade: action.personalData.cidade,
      estado: action.personalData.estado,
    };
  default: return state;
  }
};

export default pessoalReducer;
