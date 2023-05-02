import { Component } from "react";
import "./header.scss";
import { StarHeader } from "../icons";
import { Cart } from "../icons";
import PropTypes from "prop-types";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="home__header">
        <h1 className="header__logo">{this.props.title}</h1>
        <div className="header__icons_container">
          <StarHeader />
          <div className="header__counter">&lsaquo; {this.props.favoritesNumber} &rsaquo;</div>
          <Cart />
          <div className="header__counter">&lsaquo; {this.props.cartNumber} &rsaquo;</div>
        </div>
      </header>
    );
  }
}

export default Header;

Header.defaultProps = {
  title: "Shop",
  favoritesNumber: 0,
  cartNumber: 0,
};

Header.propTypes = {
  title: PropTypes.string,
  favoritesNumber: PropTypes.number,
  cartNumber: PropTypes.number,
};

