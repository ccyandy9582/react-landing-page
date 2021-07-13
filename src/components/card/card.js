import React from "react"
import { Col } from 'react-bootstrap'

class Card extends React.Component {
    render() {
        var aboutSectionStyle = {
            display: 'inline-block',
            position: 'relative',
            top: '23%',
            left: '11%',
            backgroundColor: this.props.color, 
            width: '70%',
            height: '68%'
        }
        var aboutBorderStyle = {
            display: 'inline-block',
            border: 'solid 2px #2c272d',
            position: 'relative',
            top: '-56%',
            left: '17%',
            width: '70%',
            height: '69%'
        } 
        var columnStyle = {
            minHeight: '400px'
        }
        return (
            <Col md={'auto'} lg={6} style={columnStyle}>
                <div style={aboutSectionStyle}></div>
                <div style={aboutBorderStyle}>
                    <div style={{margin: `${15}% ${5}% ${0}`}}>
                        <h1 className="display-5" style={{fontWeight: "bold", color: "azure"}}>{this.props.title}</h1>
                        <p style={{fontSize: `${20}px`}}>{this.props.content}</p>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Card