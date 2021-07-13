import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './animation.css'
import Timeline from './timeline/timeline'

class Experience extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Container id="experience">
                <Row>
                    <Col align="center">
                        <Timeline />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Experience