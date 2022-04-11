import React, { Component } from "react";

class ErrorForm extends Component {
  render() {
    const { error } = this.props;
    return (
      error !== '' ? <div className="error">{error}</div> : null
    )
  }
}

export default ErrorForm;
