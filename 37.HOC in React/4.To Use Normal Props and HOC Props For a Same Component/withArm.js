import React, { Component } from "react";
const Army = (Men, shots) => {
  class NewMen extends Component {
    state = {
      gunshots: 0,
    };
    handleGunshots = () => {
      this.setState({ gunshots: this.state.gunshots + shots });
    };
    render() {
      return (
        <Men
          hocgunname="AK47"
          hocgunshots={this.state.gunshots}
          hochandleGunshots={this.handleGunshots}
          {...this.props}
        />
      );
    }
  }
  return NewMen;
};
export default Army;
