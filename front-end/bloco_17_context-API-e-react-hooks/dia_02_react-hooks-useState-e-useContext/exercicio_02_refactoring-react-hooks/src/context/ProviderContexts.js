import React from "react";
import PropType from "prop-types";
import CarsProvider from "./CarsProvider";
import SignalProvider from "./SignalProvider";

function ProviderContexts({ children }) {
  return (
    <CarsProvider>
      <SignalProvider>
        {children}
      </SignalProvider>
    </CarsProvider>
  );
}

ProviderContexts.propTypes = {
  children: PropType.node.isRequired,
}

export default ProviderContexts;
