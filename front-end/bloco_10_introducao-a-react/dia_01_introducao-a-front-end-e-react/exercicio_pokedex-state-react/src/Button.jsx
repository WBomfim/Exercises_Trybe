import React from "react";
import './Button.css';

class Button extends React.Component {
  render() {
    const { children, className, onClick, disabled } = this.props;
    
    return (
      <button 
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

export default Button;
