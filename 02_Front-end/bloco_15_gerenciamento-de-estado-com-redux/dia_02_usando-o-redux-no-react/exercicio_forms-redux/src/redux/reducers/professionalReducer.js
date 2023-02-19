export const PROFESSIONAL_FORM = 'PROFESSIONAL_FORM';

const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM:
    return {
      curriculo: action.professionalData.curriculo,
      cargo: action.professionalData.cargo,
      descricao: action.professionalData.descricao,
    };
  default: return state;
  }
};

export default professionalReducer;
