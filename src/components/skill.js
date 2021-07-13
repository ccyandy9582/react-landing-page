import React from "react";
import { Col, Row, Container, ListGroup } from 'react-bootstrap'
import './animation.css'

class Skill extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {content: [
        {
            skill: "Website development",
            desc: "By using html, css, javascript, nodejs, expressjs, reactjs",
            icon: "bi bi-columns-gap"
        },
        {
            skill: "Software development",
            desc: "By using java, pyhton",
            icon: "bi bi-window-sidebar"
        },
        {
            skill: "Cloud deployment",
            desc: "By using Azure, Aws to deploy database",
            icon: "bi bi-cloud-check"
        },
        {
            skill: "Collect your requirement",
            desc: "A lot of experience of communicate to client",
            icon: "bi bi-mailbox"
        },
    ]}
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
        const skillList = this.state.content.map((skill, index)=>{
            return <SkillItem 
                        icon={skill.icon}
                        skill={skill.skill}
                        desc={skill.desc}
                        key={skill+index}/>
        })
      return (
        <Container style={{marginBottom: `${1}rem`}} id="skill">
            <Row>
                <Col align="center">
                    <h1 style={title}>Skill Sets</h1>
                    <ListGroup as="ul" horizontal={true} className="mt-3">
                        {skillList}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
      );
    }
  }

  class SkillItem extends React.Component {
    render() {
        return (
            <ListGroup.Item as="li" style={{ border: "none" }} className="backInLeft">
                <div style={{fontSize: `${40}px`}}><i className={this.props.icon}></i></div>
                <h3>{this.props.skill}</h3>
                <div>{this.props.desc}</div>
            </ListGroup.Item>
        )
    }
  }
  
  export default Skill;