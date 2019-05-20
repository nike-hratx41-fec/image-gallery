import React from "react";
import { Button } from 'reactstrap';

class CartFavoriteButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sku: props.sku
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() { }

  onClick(event) {
    console.log(event.target.name, this.state.sku);
  }

  render() {
    return (
      <div>
        <Button name="add-cart" onClick={this.onClick} className='cart-favorite-button rounded-pill'>Add to Cart</Button>
        <Button name="favorite" onClick={this.onClick} className='cart-favorite-button rounded-pill'>Favorite</Button>
      </div>
    );
  }
}

export default CartFavoriteButtons;
