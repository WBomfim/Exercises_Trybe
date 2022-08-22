import React, { useState } from "react";
import PropTypes from 'prop-types';
import SignalContext from "./SignalContext";

function SignalProvider({ children }) {
  const [Signal, setSignal] = useState({
    color: 'red'
  });

  const changeSignal = (color) => {
    setSignal({
      color
    });
  }

  const context = {
    Signal,
    changeSignal
  }

  return (
    <SignalContext.Provider value={context}>
      {children}
    </SignalContext.Provider>
  );
}

SignalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SignalProvider;
