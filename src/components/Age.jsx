import React, { Component  } from "react";

class Age extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  render() {
    return (
      <div className="footer-clean bordeer border-rounded border-white shadow">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>I am counting oyour age</h4>
              <h5>Your Age is {this.state.age}</h5>
              <div className="form-group">
                <button
                  className="btn btn-info border border-rounded"
                  onClick={this.setAge}>Count</button>
              </div>
            </div>
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