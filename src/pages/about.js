import React from 'react'
import './about.less'

class About extends React.Component {
    render () {
        return (
            <div>
                this is about
                <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
                <circle id="backdrop" r="90" cy="120" cx="120" strokeWidth="3" stroke="#333" fill="none"/>
                <circle id="progress" r="90" cy="120" cx="120" strokeWidth="4" stroke="red" fill="none"/></svg>
            </div>
        )
    }
}

export default About