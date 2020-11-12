import React, { Component } from "react";
import Army from "./withArm";
class Nblaskar extends Component {
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
          Nblaskar {this.props.hocgunname} Gunshots: {this.state.gunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Nblaskar);
