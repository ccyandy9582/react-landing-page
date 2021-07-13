import React from "react";
import { Col, Row, Container, ListGroup } from 'react-bootstrap'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [
                { type: "github", href: "https://github.com/ccyandy9582" },
                { type: "linkedin", href: "https://linkedin.com/in/andyccy" },
                { type: "envelope", href: "mailto:ccyandy9582@gmail.com" }
            ]
        }
    }

    render() {
        const infoList = this.state.data.map(info => {
            return <ListItem type={info.type} href={info.href} key={info.type + info.href} />
        })
        const footerStyle = {
            backgroundColor: "#797979",
            height: "fit-content",
            minHeight: "80px"
        }
        return (
            <div className="footer" style={footerStyle}>
                <Container>
                    <Row className="row-cols-auto" style={{ paddingTop: 20 + 'px', paddingBottom: 20 + 'px' }}>
                        <Col style={{ paddingTop: `${6}px`, color: "#f0f8ff" }}>© 2021, Created Andy Chan</Col>
                        <Col sm={{ offset: 3 }} md={{ offset: 5 }} lg={{ offset: 7 }}>
                            <ListGroup as='ul' horizontal={true}>
                                {infoList}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class ListItem extends React.Component {
    render() {
        const nameOfClass = `bi bi-${this.props.type}`,
            href = this.props.href
        return (
            <ListGroup.Item as='li' className="bg-transparent" style={{ border: "none" }}>
                <a className="link-info" href={href}><i className={nameOfClass}></i></a>
            </ListGroup.Item>
        )
    }
}

export default Footer;