import React from 'react'
import { Provider } from 'react-redux'
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import App from './App';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);

  it('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();

    const showCounter = screen.queryByText('0');
    expect(showCounter).toBeInTheDocument();
  });

  it('the button should add 1 to the counter', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.getByText('Clique aqui');
    userEvent.click(buttonAdicionar);

    const showCounter = screen.getByText('1');
    expect(showCounter).toBeInTheDocument();
  });

  it('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    const showCounter = screen.queryByText('5');
    expect(showCounter).toBeInTheDocument();
  });
});
