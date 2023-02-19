import { PESSOAL_FORM } from '../reducers/pessoalReducer';

const pessoalUpdate = (personalData) => ({
  type: PESSOAL_FORM,
  personalData,
});

export default pessoalUpdate;
