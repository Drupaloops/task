import React from 'react'
import './about.less'

class About extends React.Component {
    render () {
        return (
            <div>
                <span className="oo">this is about</span>
                <div className="wrap">
                    <div className="outer"></div>
                    <div className="inner">
                        <div className="spiner"></div>
                        <div className="filler"></div>
                        <div className="masker"></div>
                    </div>
                    <div className="inner2">
                        <div className="spiner"></div>
                        <div className="filler"></div>
                        <div className="masker"></div>
                    </div>
                </div>
                <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
                    <circle id="backdrop" r="90" cy="120" cx="120" strokeWidth="3" stroke="gray" fill="none"/>
                    <circle id="progress" r="90" cy="120" cx="120" strokeWidth="4" stroke="blue" fill="none"/>
                </svg>
                <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
                    <circle id="background" r="90" cy="120" cx="120" strokeWidth="3" stroke="gray" fill="none"/>
                    <circle id="complete" r="90" cy="120" cx="120" strokeWidth="4" stroke="blue" fill="none"/>
                </svg>
                <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
                    <circle id="background" r="90" cy="120" cx="120" strokeWidth="3" stroke="gray" fill="none"/>
                    <circle id="complete" r="90" cy="120" cx="120" strokeWidth="4" stroke="blue" fill="none"/>
                    {/* <path d="M120 30 
                        A90,90 0 1 1 120,210
                        A90,90 0 1 1 120,30
                        M55 135 L100 180 190 90" id="mark" strokeWidth="4" stroke="blue" fill="none"/> */}
                    <polyline id="success" points="55,135 100,180 190,90" strokeWidth="4" stroke="blue" fill="none"></polyline>
                </svg>
            </div>
        )
    }
}

export default About