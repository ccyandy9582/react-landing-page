import React from "react";
import ReactDOM from "react-dom";
import "./header.scss";
import Navigationbar from "./navbar/navbar";
import Banner from "./banner/banner";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Navigationbar />
        <Banner image={'../coffee-banner.jpeg'} title={"I'am Andy Chan,"} desc={"I want to be a full-stack developer"}/>
      </div>
    );
  }
}

export default Header;
