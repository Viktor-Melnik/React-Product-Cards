import { Component } from "react";
import "./button.scss";
import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className={this.props.className}
        style={{ backgroundColor: this.props.backgroundColor }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};