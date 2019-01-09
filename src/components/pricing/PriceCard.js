import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

export default class PriceCard extends Component {
  state = {
    price: [100, 150, 250],
    seat: ["Balcony", "Medium", "Front Row"],
    description: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, at?",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, at?",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, at?"
    ],
    link: ["#", "#2", "#3"],
    aniDelay: [500, 0, 500]
  };

  showCards = () =>
    this.state.price.map(({ ...state }, i) => (
      <Zoom
        key={i}
        delay={this.state.aniDelay[i]}
      >
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.price[i]}</span>
              <span>{this.state.seat[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.description[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bg="#ffa800"
                color="#fff"
                link={this.state.link[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showCards()}</div>
        </div>
      </div>
    );
  }
}
