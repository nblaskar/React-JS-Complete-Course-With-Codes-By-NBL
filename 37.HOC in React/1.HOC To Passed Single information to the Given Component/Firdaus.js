import React, { Component } from "react";
import Army from "./withArm";
class Firdaus extends Component {
  state = {
    gunshots: 0,
  };
  handleGunshots = () => {
    this.setState({ gunshots: this.state.gunshots + 1 });
  };
  render() {
    return (
      <div>
        <h3 onMouseOver={this.handleGunshots}>
          Firdaus{this.props.hocgunname} Gunshots: {this.state.gunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Firdaus);
