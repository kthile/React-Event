import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const MyDrawer = props => {
  const scrollToComponent = component => {
    scroller.scrollTo(component, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };

  return (
    <Drawer anchor="top" open={props.open} onClose={() => props.onClose(false)}>
      <List component="nav" className="list">
        <ListItem
          className="list_item"
          button
          onClick={() => scrollToComponent("Featured")}
        >
          Countdown
        </ListItem>
        <ListItem
          className="list_item"
          button
          onClick={() => scrollToComponent("Info")}
        >
          Venue Info
        </ListItem>
        <ListItem
          className="list_item"
          button
          onClick={() => scrollToComponent("Highlights")}
        >
          Deals
        </ListItem>
        <ListItem
          className="list_item"
          button
          onClick={() => scrollToComponent("PriceCard")}
        >
          Pricing
        </ListItem>
        <ListItem
          classname="list_item"
          button
          onClick={() => scrollToComponent("Map")}
        >
          Directions
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MyDrawer;
