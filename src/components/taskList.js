import React from 'react'

function HOC(WrappedComponent){
    return class HOC extends WrappedComponent {
        
        componentDidMount(){
            this.setState({type: 'B'})
        }

        render(){
            return (
                <React.Fragment>
                    { super.render() }
                </React.Fragment>
            )
        }
    }
}


@HOC
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'A',
            tableData: 'oo'
        }
    }
    render () {
        return (
            <div>
                {this.state.type == 'A' ? '风控' : '催熟'} 
                <p>table</p>
            </div>
        )
    }
}