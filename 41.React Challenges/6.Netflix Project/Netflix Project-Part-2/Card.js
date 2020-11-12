import React, { Component } from "react";
export default class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards">
          <div className="card">
            <img src={this.props.imgsrc} alt="myPic" className="card_img" />
            <div className="card_info">
              <span className="card_category">{this.props.title} </span>
              <h3 className="card_title">{this.props.sName}</h3>
              <a href={this.props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
