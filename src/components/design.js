import React from "react"
import Card from "./card/card"
import {Col, Row, Container} from 'react-bootstrap'

class Design extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let title = "I have a consuming passion for JavaScript",
            desc = ""
        return (
            <Row id="design" style={{margin: `${20}px 0`}}>
                <Col md={'auto'} lg={6} align="center" style={{padding: `${8}%`}}>
                    <img src="../jsavscript.jpeg" className="img-fluid" style={{borderRadius: `${20}px`}}/>
                </Col>
                <Card color="#b1b6b0" title={title} content={desc}/>
            </Row>
        );
    }
}

export default Design