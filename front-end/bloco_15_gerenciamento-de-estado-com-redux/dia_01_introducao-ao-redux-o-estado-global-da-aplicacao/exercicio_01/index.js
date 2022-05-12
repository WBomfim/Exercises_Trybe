const STATE_INITIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducerChangeColor = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        index:  state.index === state.colors.length - 1 ? 0 : state.index += 1,
      };
    case 'PREVIOUS':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index -= 1,
      };
    case 'CREATE_COLOR':
      return {
        ...state,
        colors: [...state.colors, action.color],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducerChangeColor);

const buttonNext = document.getElementById('next');
buttonNext.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT' });
});

const buttonPrevious = document.getElementById('previous');
buttonPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS' });
});

const buttonCreateColor = document.getElementById('createColor');
buttonCreateColor.addEventListener('click', () => {
  store.dispatch({ type: 'CREATE_COLOR', color: createColor() });
});

const createColor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      color += oneChar[aleatorio()];
  }
  return color;
}

store.subscribe(() => {
  const container = document.getElementById('container');
  const showColor = document.getElementById('value');
  const state = store.getState();
  const color = state.colors[state.index];
  showColor.innerHTML = color;

  if ( color === 'black') {
    container.style.color = 'white';
  } else {
    container.style.color = 'black';
  }
  container.style.backgroundColor = color;
});
