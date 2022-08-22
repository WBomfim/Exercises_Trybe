import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as TodoActions from '../store/actions/todo';

const FilterAll = ({ filter }) => (
  <div className="FilterAll">
    <button type="button" onClick={ () => filter('all') }>Todos</button>
    <button type="button" onClick={ () => filter('done') }>Finalizados</button>
    <button type="button" onClick={ () => filter('progress') }>Em andamento</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filter: (filter) => dispatch(TodoActions.filter(filter)) });

FilterAll.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterAll);
