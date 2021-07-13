import React from 'react';
import {Chrono} from 'react-chrono'
import data from './data'

class Timeline extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            
        }
    }

    render() {
        let title = {
            color: "rgb(168 135 133)",
            fontFamily: 'Trocchi, serif',
            fontSize: "45px",
            fontWeight: "normal",
            lineHeight: "58px",
            margin: "0"
        }
        return (
            <div className='my-3'>
                <h1 style={title}>My working history</h1>
                <Chrono items={data} mode="VERTICAL_ALTERNATING" hideControls={true} theme={{primary: "rgb(57 74 87)", secondary: "white", cardForeColor: "rgb(2 35 55)"}} cardWidth={350} useReadMore={false}>
                <div className="chrono-icons">
                    <i class="bi bi-code-square"></i>
                    <i class="bi bi-code-square"></i>
                    <i class="bi bi-shop"></i>
                </div>
                </Chrono>
            </div>
        )
    }
}

export default Timeline