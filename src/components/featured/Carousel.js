import React from "react";
import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500
  };
  return (
    <div
      className="carousel_wrapper"
      style={{
        overflow: "hidden",
        height: `100vh`
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_one}) 50% 50% no-repeat / cover `,
              height: `100vh`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_two}) 50% 50% no-repeat / cover `,
              height: `100vh`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_three}) 50% 50% no-repeat / cover `,
              height: `100vh`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
