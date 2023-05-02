import { Component } from "react";
import "./product_card.scss";
import { StarCard } from "../icons";
import Button from "../button";
import PropTypes from "prop-types";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fill: "black",
      isFavorite: this.props.isFavorite,
    };
  }

  toggleFavorite = (article) => {
    if (this.state.isFavorite) {
      this.props.removeFavorite(article);
      this.setState((prevState) => ({fill: "black", isFavorite: !prevState.isFavorite}));
    } else {
      this.props.addFavorite(article);
      this.setState((prevState) => ({fill: "gold", isFavorite: !prevState.isFavorite}));
    }
  };


  render() {
    return (
      <li id={this.props.id} className="products__card">
        <img
          src={this.props.imageUrl}
          alt={this.props.name}
          width={this.props.width}
          height={this.props.height}
        />

        <div className="products__name_container">
          <h2>{this.props.name}</h2>
          <StarCard fill={this.state.fill} onClick={() => this.toggleFavorite(this.props.article)}/>
        </div>

        <div className="products__description_container">
          <p>Article: {this.props.article}</p>
          <p>Color: {this.props.color}</p>
        </div>

        <div className="products__price_container">
          <p>&euro; {this.props.price}</p>
          <Button className="products__btn" text="Add to cart" backgroundColor="teal" onClick={() => this.props.openModal(this.props.article)} />
        </div>
      </li>
    );
  }
}

export default ProductCard;

ProductCard.defaultProps = {
  height: 350,
  width: 350,
};

ProductCard.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  article: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  openModal: PropTypes.func,
  isFavorite: PropTypes.bool,
};
