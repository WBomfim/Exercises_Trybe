import React, { Component } from "react";
import './ErrorForm.css'

class ErrorForm extends Component {
  showErrors = () => {
    const { errors } = this.props;
    if (errors !== '') {
      return (
        errors.map((error) => <p key={error} className="error">{error}</p>)
      )
    } 
    return null;
  }

  render() {
    return (
      <div>
        {this.showErrors()}
      </div>
    )
  }
}

export default ErrorForm;
