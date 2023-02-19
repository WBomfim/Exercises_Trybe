import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { thunkCharacter } from '../actions';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
      characterSearched: '',
    })
  }

  submitName = (event) => {
    event.preventDefault();
    const { inputText } = this.state;
    const { importedThunk } = this.props;
    this.setState({
      inputText: '',
      characterSearched: inputText,
    })
    importedThunk(inputText);
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <form onSubmit={this.submitName}>
          <h1>Type a character below:</h1>
          <input onChange={this.handleChange} 
          placeholder="Enter Character"
          value={inputText}
          />
          <div className="buttonSection">
            <button className="submitButton" type="submit" >Search!</button>
          </div>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  importedThunk: (name) => dispatch(thunkCharacter(name))
});

SearchForm.propTypes = {
  importedThunk: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchForm);
