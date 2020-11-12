import React, { Component } from "react";
import Army from "./withArm";
class Nblaskar extends Component {
  render() {
    return (
      <div>
        <h2>NBL Camp: {this.props.campN}</h2>
        <h3 onMouseOver={this.props.hochandleGunshots}>
          Nblaskar {this.props.hocgunname} Gunshots: {this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Nblaskar, 10);
