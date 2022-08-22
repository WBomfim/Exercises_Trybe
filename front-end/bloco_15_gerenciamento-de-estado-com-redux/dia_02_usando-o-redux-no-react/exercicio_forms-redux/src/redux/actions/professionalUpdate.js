import { PROFESSIONAL_FORM } from '../reducers/professionalReducer';

const professionalUpdate = (professionalData) => ({
  type: PROFESSIONAL_FORM,
  professionalData,
});

export default professionalUpdate;
