import { Component } from "react";
import "./modal.scss";
import PropTypes from "prop-types";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className="modal__wrapper" onClick={this.props.closeModal}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <h2 className="modal__title">{this.props.header}</h2>
            {this.props.closeButton ? (
              <div className="modal__close" onClick={this.props.closeModal}>
                &times;
              </div>
            ) : null}
          </div>
          <hr />
          <div className="modal__body">
            <p className="modal__text">{this.props.text}</p>
          </div>
          <hr />
          <div className="modal__footer">{this.props.actions}</div>
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  id: PropTypes.number,
  header: PropTypes.string,
  text: PropTypes.string,
  closeModal: PropTypes.func,
  closeButton: PropTypes.bool,
  actions: PropTypes.object,
};