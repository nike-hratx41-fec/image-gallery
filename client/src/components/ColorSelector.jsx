import React from "react";
import ReactDOM from 'react-dom';
import "../styles/color-selector.css";
import Axios from "axios";
import { Button } from "reactstrap";

class ColorSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sku: "CJ0066-900",
      colors: []
    };
    this.onClick = this.onClick.bind(this);
  }

  fetchColorSelectorData(sku) {
    Axios.get(`${process.env.API_URL}/api/colors/${sku}`)
      .then(colors => {
        this.setState({
          sku: sku,
          colors: colors.data
        });
      })
      .catch(err => {});
  }

  componentDidMount() {
    this.fetchColorSelectorData(this.state.sku);
  }

  onClick(event) {
    console.log(event.target.getAttribute("value"));
  }

  componentDidUpdate(prevProps) {
    if (this.props.sku !== prevProps.sku) {
      this.fetchColorSelectorData(this.props.sku);
    }
  }

  render() {
    return (
      <div className="color-grid">
        {this.state.colors.map((color, index) => {
          return (
            <Button
              onClick={this.onClick}
              className="color-block"
              key={index}
              style={{ backgroundColor: color }}
              value={color}
            />
          );
        })}
      </div>
    );
  }
}

window.ColorSelector = ColorSelector;
export default ColorSelector;
ReactDOM.render(<ColorSelector />, document.getElementById("color-selector"));
