import React, { Component } from "react";
import Army from "./withArm";
class Firdaus extends Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.hochandleGunshots}>
          Firdaus{this.props.hocgunname} Gunshots: {this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Firdaus, 20);
