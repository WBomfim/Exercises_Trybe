const formatCep = (cep) => {
  const CEP_REGEX = /^\d{5}-\d{3}$/;
  if (CEP_REGEX.test(cep)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

module.exports = formatCep;
