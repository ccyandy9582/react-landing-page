import React from "react";
import { Row, Col } from 'react-bootstrap'
import '../animation.css'

class Banner extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        height: props.height,
        width: props.width, 
        bannerHeight: props.bannerHeight,
        title: "",
        desc: ""
    }
  }

  componentWillMount() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const bannerHeight = (window.innerHeight * 6) / 10;
    this.setState(()=>{
        return { height, width, bannerHeight }
    });
  }

  render() {
      const textStyle = {
        color: "white",
        textShadow: "0px 3px 7px rgba(0,0,0,.5)",
      }
    return (
      <div
        style={{
          backgroundImage: `url('${this.props.image}')`,
          height: this.props.bannerHeight || this.state.bannerHeight,
          backgroundSize: "cover",
        }}
      >
        <Row style={{ height: `${100}%` }} className="backInLeft">
          <Col md={6} style={{ margin: "auto", paddingLeft: "50px" }}>
            <h1
              className="display-1"
              style={textStyle}
            >
              {this.props.title || this.state.title}
            </h1>
            <h2
              style={textStyle}
            >
              {this.props.desc || this.state.desc}
            </h2>
          </Col>
          <Col md={0} />
        </Row>
      </div>
    );
  }
}

export default Banner;
