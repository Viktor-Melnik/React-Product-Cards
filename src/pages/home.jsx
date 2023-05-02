import { Component } from "react";

import Header from "../components/header";
import ProductList from "../components/product_list";
import Modal from "../components/modal";
import Button from "../components/button";

import { modalButtons } from "../components/button/buttons_array";
import { modalWindowDeclarations } from "../components/modal/modals_array";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productsInFavorites: [],
      productsInCart: [],
      renderModal: false,
      productModal: {},
    };
  }

  componentDidMount() {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => alert(error.message));

    const productsInFavorites = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    const productsInCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    this.setState((prevState) => ({
      ...prevState,
      productsInFavorites,
      productsInCart,
    }));
  }

  addFavorite = (article) => {
    const newFavorite = this.state.products.find(
      (product) => product.article === article
    );

    this.setState((prevState) => {
      const newProductsInFavorites = [
        newFavorite,
        ...prevState.productsInFavorites,
      ];

      localStorage.setItem(
        "favourites",
        JSON.stringify(newProductsInFavorites)
      );

      return { productsInFavorites: newProductsInFavorites };
    });
  };

  removeFavorite = (article) => {
    const newProductsInFavorites = this.state.productsInFavorites.filter(
      (product) => product.article !== article
    );

    localStorage.setItem("favourites", JSON.stringify(newProductsInFavorites));

    this.setState((prevState) => ({
      ...prevState,
      productsInFavorites: newProductsInFavorites,
    }));
  };

  openModal = (article) => {
    const productCard = this.state.products.find(
      (product) => product.article === article
    );

    this.setState({
      renderModal: true,
      productModal: productCard,
    });
  };

  closeModal = () => {
    this.setState({ renderModal: false });
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      const newProductsInCart = [product, ...prevState.productsInCart];

      localStorage.setItem("cart", JSON.stringify(newProductsInCart));

      return { productsInCart: newProductsInCart };
    });
    this.closeModal();
  };

  render() {
    return (
      <>
        <Header
          title="React Clothes Shop"
          favoritesNumber={this.state.productsInFavorites.length}
          cartNumber={this.state.productsInCart.length}
        />

        <main className="home__main">
          <section className="main__container">
            <ProductList
              products={this.state.products}
              productsInFavorites={this.state.productsInFavorites}
              addFavorite={this.addFavorite}
              removeFavorite={this.removeFavorite}
              openModal={this.openModal}
            />
          </section>
        </main>

        {this.state.renderModal ? (
          <Modal
            actions={
              <>
                <Button
                  onClick={() => {
                    this.addToCart(this.state.productModal);
                  }}
                  key={modalButtons[0].id}
                  {...modalButtons[0]}
                />
                <Button
                  onClick={this.closeModal}
                  key={modalButtons[1].id}
                  {...modalButtons[1]}
                />
              </>
            }
            {...modalWindowDeclarations[1]}
            closeModal={this.closeModal}
            addToCart={this.addToCart}
            productModal={this.state.productModal}
          />
        ) : null}
      </>
    );
  }
}
