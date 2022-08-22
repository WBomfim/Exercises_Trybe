import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Greeting({ initialName }) {
  const storedName = localStorage.getItem('name');
  const [name, setName] = useState(storedName || initialName);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  function handleChange({ target: { value } }) {
    setName(value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input onChange={ handleChange } id="name" />
        </label>
      </form>
      { name ? <strong>{ `Hello ${name}` }</strong> : 'Please type your name' }
    </div>
  );
}

export default Greeting;

Greeting.propTypes = {
  initialName: PropTypes.string,
};

Greeting.defaultProps = {
  initialName: '',
};
