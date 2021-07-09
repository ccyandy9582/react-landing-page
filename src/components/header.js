import React from 'react'
import ReactDOM from 'react-dom'
import './header.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div className={'ui basic padded inverted center aligned segment footer'}>
                landing page
            </div>
        )
    }
}

export default Header