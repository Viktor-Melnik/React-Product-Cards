import { Component } from "react";
import "./product_list.scss";
import ProductCard from "../product_card";
import PropTypes from "prop-types";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="products__list">
        {this.props.products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            isFavorite={this.props.productsInFavorites.includes(
              product.article
            )}
            addFavorite={this.props.addFavorite}
            removeFavorite={this.props.removeFavorite}
            openModal={this.props.openModal}
          />
        ))}
      </ul>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
  productsInFavorites: PropTypes.array,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  openModal: PropTypes.func,
};
