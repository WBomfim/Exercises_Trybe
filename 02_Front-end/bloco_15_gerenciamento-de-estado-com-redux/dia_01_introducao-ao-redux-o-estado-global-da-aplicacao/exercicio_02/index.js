const STATE_INITIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const STATE_INITIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const firstReducer = (state = STATE_INITIAL_1, action) => {
  switch (action.type) {
    case 'ALTERA_NOME_E_SOBRENOME_1':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
        endereco: action.endereco,
        cidade: action.cidade,
      };
    default:
      return state;
  }
};

const secondReducer = (state = STATE_INITIAL_2, action) => {
  switch (action.type) {
    case 'ALTERA_NOME_E_SOBRENOME_2':
          return {
            ...state,
            nome: action.nome,
            sobrenome: action.sobrenome,
            endereco: action.endereco,
            cidade: action.cidade,
          };
    default:
      return state;
  }
};

const combineReducers = Redux.combineReducers({
  firstReducer,
  secondReducer,
});

const store = Redux.createStore(combineReducers);

window.onload = () => {
  setTimeout(() => {
    store.dispatch({
      type: 'ALTERA_NOME_E_SOBRENOME_1',
      nome: 'Bruna',
      sobrenome: 'Santana Oliveira',
      endereco: 'Rua Holanda, 332',
      cidade: 'São Paulo',
    });

    store.dispatch({
      type: 'ALTERA_NOME_E_SOBRENOME_2',
      nome: 'Rodrigo',
      sobrenome: 'Santos da Silva',
      endereco: 'Rua Soldado Mathias, 765',
      cidade: 'Belo Horizonte',
    });
  }, 4000);
};

store.subscribe(() => {
  const state = store.getState();
  const nome1 = document.getElementById('nome-1');
  const sobrenome1 = document.getElementById('sobrenome-1');
  const endereco1 = document.getElementById('endereco-1');
  const cidade1 = document.getElementById('cidade-1');

  const nome2 = document.getElementById('nome-2');
  const sobrenome2 = document.getElementById('sobrenome-2');
  const endereco2 = document.getElementById('endereco-2');
  const cidade2 = document.getElementById('cidade-2');

  nome1.innerHTML = state.firstReducer.nome;
  sobrenome1.innerHTML = state.firstReducer.sobrenome;
  endereco1.innerHTML = state.firstReducer.endereco;
  cidade1.innerHTML = state.firstReducer.cidade;

  nome2.innerHTML = state.secondReducer.nome;
  sobrenome2.innerHTML = state.secondReducer.sobrenome;
  endereco2.innerHTML = state.secondReducer.endereco;
  cidade2.innerHTML = state.secondReducer.cidade;
});
