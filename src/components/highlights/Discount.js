import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1 //updater function adds 1 to discountStart
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 20);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before Dec. 25th</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde
                quas reprehenderit. Molestiae libero eligendi neque repellat
                esse, iusto nobis debitis, recusandae quis velit voluptatum
                totam atque dicta adipisci voluptatem?
              </p>

              <MyButton
                text="Purchase tickets"
                bg="#ffa800"
                color="#fff"
                link="#"
              />

            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
