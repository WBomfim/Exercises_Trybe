const verifyForm = (value) => {
  const { name, email, cpf, endereco, cidade, estado, tipo } = value;
  const error = [];

  if (name === '') {
    error.push('O campo Nome é obrigatório');
  }

  if (name.length > 40) {
    error.push('O campo Nome deve ter no máximo 40 caracteres');
  }

  if (email === '') {
    error.push('O campo Email é obrigatório');
  }

  if (email.length > 50) {
    error.push('O campo Email deve ter no máximo 50 caracteres');
  }

  if (email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)))$/)) {
    error.push('O campo Email deve ser válido');
  }

  if (cpf === '') {
    error.push('O campo CPF é obrigatório');
  }

  if (cpf.length > 11) {
    error.push('O campo CPF deve ter no máximo 11 caracteres');
  }

  if (endereco === '') {
    error.push('O campo Endereço é obrigatório');
  }

  if (endereco.length > 200) {
    error.push('O campo Endereço deve ter no máximo 200 caracteres');
  }

  if (cidade === '') {
    error.push('O campo Cidade é obrigatório');
  }

  if (cidade.length > 28) {
    error.push('O campo Cidade deve ter no máximo 28 caracteres');
  }

  if (estado === '') {
    error.push('O campo Estado é obrigatório');
  }

  if (tipo === '') {
    error.push('O campo Tipo de Residência é obrigatório');
  }

  return error;
}

export default verifyForm;
