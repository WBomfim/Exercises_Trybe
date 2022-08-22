import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTodo from './components/AddTodo';
import FilterAll from './components/FilterAll';
import TodoList from './components/TodoList';

const App = () => (
  <Provider store={ store }>
    <AddTodo />
    <FilterAll />
    <TodoList />
  </Provider>
);

export default App;
