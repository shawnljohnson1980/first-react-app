import React, { Component } from "react";

class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  render() {
    return (
      <div class="footer-clean border border-white border-rounded ">
        <div class="container">
          <div class="row">
            <h4>I am counting you age!!</h4>
            <h5> Your age is {this.state.age}</h5>
            <button onClick={this.setAge}>Count</button>
          </div>
        </div>
      </div>
    );
  }

  setAge = () => {
    this.setState({ age: this.state.age + 1 });
  };
}
export default Age;
