import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured/Featured";
import Info from "./components/info/Info";
import Highlights from "./components/highlights/Highlights";
import PriceCard from "./components/pricing/PriceCard";
import Map from "./components/map/Map";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: 'url(images/slide_one.jpg) center center / cover' }}
      >
        <Header />
        <Element name="Featured">
          <Featured />
        </Element>
        <Element name="Info">
          <Info />
        </Element>
        <Element name="Highlights">
          <Highlights />
        </Element>
        <Element name="PriceCard">
          <PriceCard />
        </Element>
        <Element name="Map">
          <Map />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
