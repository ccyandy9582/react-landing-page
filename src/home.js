import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner/banner"
import Design from "./components/design"
import About from "./components/about"
import Experience from "./components/experience"
import Skill from "./components/skill"

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
        <Design />
        <About />
        <Banner image="../working.jpeg" bannerHeight={`${450}px`}/>
        <Experience />
        <Skill />
        <Footer />
      </div>
    );
  }
}

export default Home;
