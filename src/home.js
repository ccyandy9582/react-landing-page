import React from 'react'
import Header from './components/header'
import Footer from'./components/footer'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Home