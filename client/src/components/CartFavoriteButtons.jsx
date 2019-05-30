import React from "react";
import "../styles/cartfavorite-buttons.css";

class CartFavoriteButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sku: "CJ0066-900"
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (this.props.sku !== prevProps.sku) {
      this.setState({ sku: this.props.sku });
    }
  }

  onClick(event) {
    console.log(event.target.name, this.state.sku);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-dark rounded-pill cart-button"
          onClick={this.onClick}
        >
          Add to cart
        </button>
        <button
          type="button"
          className="btn btn-outline-dark rounded-pill favorite-button"
          onClick={this.onClick}
        >
          Favorite
        </button>
      </div>
    );
  }
}

window.CartFavoriteButtons = CartFavoriteButtons;
export default CartFavoriteButtons;
