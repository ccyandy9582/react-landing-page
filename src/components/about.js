import React from "react"
import {Col, Row, Container} from 'react-bootstrap'

class About extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let title = {
            color: "#7c795d",
            fontFamily: 'Trocchi, serif',
            fontSize: "45px",
            fontWeight: "normal",
            lineHeight: "58px",
            margin: "0"
        }
        let paragraph = {
            fontFamily: "'Open sans', sans-serif", 
            color: "#777777", 
            fontSize: "20px",
            padding: "10px 20px",
            textAlign: "justify"
        }
        return (
            <Container id="about">
                <Row className="justify-content-center display-3" style={title}>
                    About Me
                </Row>
                <Row>
                    <Col md={'auto'} lg={6} style={paragraph}>
                        I learned how to work with other engineers and take a look at the actual development environment through the internship program. I was responsible for developing a mobile detector and updating UI by using React. This is the first time to use React, so it was very challenging, but I boldly asked my supervisor, and I managed to overcome it.<br />Also, I have learned how to simplify my code by considering the complexity, maintainability, and testability when coding, and finally, I have to say it was an extremely rewarding working experience in Everset Innovation Ltd.
                    </Col>
                    <Col md={'auto'} lg={6} style={paragraph}>
                        I had some freelance experiences in website development. I had to complete the entire website development by myself, from consolidating the user requirements to delivering the final product. At the same time, I was a computer accessories sale for last 3 years, therefore, my communication and customer service skills have been well equipped.<br />I like to learn new thing, I have developed a scraper by using python for my friends to get the data easier from the website. I am now studying ReactJS to build a media poster that creates one post and the post will be synchronized with Facebook, Instagram and YouTube.
                    </Col>
                </Row>
                <Row align="center">
                    <Col style={{padding: `${3}% 0`}}>
                        <a href="https://github.com/ccyandy9582" target="_blank" class="btn btn-primary">Discover code</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About