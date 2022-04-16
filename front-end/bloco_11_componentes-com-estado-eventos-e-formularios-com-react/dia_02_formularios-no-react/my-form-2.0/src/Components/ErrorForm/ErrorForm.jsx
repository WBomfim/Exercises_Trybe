import React, { Component } from "react";
import './ErrorForm.css'

class ErrorForm extends Component {
  showErrors = () => {
    const { errors } = this.props;
    if (errors !== '') {
      return (
        <div>
          {errors.map((error) => <p key={error} className="error">{error}</p>)}
        </div>
      )
    } 
    return null
  }

  render() {
    return (
      <>{this.showErrors()}</>
    )
  }
}

export default ErrorForm;
