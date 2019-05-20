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
        <Button name="add-cart" onClick={this.onClick}>Add to Cart</Button>
        {/* <button name="add-cart" onClick={this.onClick}>Add to Cart</button>
        <button name="favorite" onClick={this.onClick}>Favorite</button> */}
      </div>
    );
  }
}

export default CartFavoriteButtons;
