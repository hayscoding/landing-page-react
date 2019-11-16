import React, { Component } from "react";
import styles from "./Button.css";

class Button extends Component {
  render() {
    const { onClick, text } = this.props;
    const showText = function() {return text ? text : () => { return " " }}

    return (
      <div className={styles.small} onClick={onClick ? onClick : () => {}}>
        <span className={styles.word}>{showText()}</span>
      </div>
    );
  }
}

export default Button;
