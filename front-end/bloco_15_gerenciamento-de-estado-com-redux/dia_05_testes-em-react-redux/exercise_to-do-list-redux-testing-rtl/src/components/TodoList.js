import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as TodoActions from '../store/actions/todo';

const getTodos = (todos, filter) => {
  switch (filter) {
  case 'all':
    return todos;
  case 'done':
    return todos.filter((todo) => todo.completed);
  case 'progress':
    return todos.filter((todo) => !todo.completed);
  default:
    return todos;
  }
};

const TodoList = ({ todos, toogle, filter }) => (
  <ul>
    {
      getTodos(todos, filter).map((todo) => (
        <li
          key={ todo.id }
          onClick={ () => toogle(todo.id) }
          style={ { textDecoration: todo.completed ? 'line-through' : 'none' } }
        >
          {todo.text}
        </li>
      ))
    }
  </ul>
);

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
  filter: state.todo.filter });

const mapDispatchToProps = (dispatch) => ({
  toogle: (id) => dispatch(TodoActions.toogleTodo(id)) });

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  toogle: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
