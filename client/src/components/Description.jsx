import React from "react";

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };
  }

  componentDidMount() {
    console.log("MOUNTED");
  }

  render() {
    return <div>THIS IS THE DESCRIPTION</div>;
  }
}

export default Description;
