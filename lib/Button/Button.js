import React, { Component } from "react";
// import classNames from "classnames";
// import "./Button.css";

class Button extends Component {
  render() {
    // const { onClick, text } = this.props;

    // const isSmall = this.props.className ? this.props.className.indexOf('small') >= 0 : false
    // const classes = isSmall ? classNames(this.props.className) : classNames("fancy-button", this.props.className);

    const showText = function() {return text ? text : () => { return " " }}
    //className={classes} href="#menu" onClick={onClick ? onClick : () => { return null }}
    
    return (
      <div> 
        <span className="word">{showText()}</span>
      </div>
    );
  }
}

export default Button;
