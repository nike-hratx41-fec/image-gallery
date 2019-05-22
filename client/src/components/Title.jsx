import React from "react";
import Axios from "axios";

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sku: props.sku,
      title: "Loading...",
      price: "Loading...",
      category: "Loading..."
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:3001/api/title/${this.state.sku}`)
      .then(title => {
        this.setState({
          title: title.data.productName,
          price: title.data.price,
          category: title.data.category
        });
      })
      .catch(err => { });
  }
  render() {
    return (
      <div>
        <span>Category: {this.state.category}</span>
        <span>${this.state.price}</span>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

export default Title;
