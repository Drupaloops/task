import React from 'react'
import TaskList from '../components/taskList'

class Hello extends React.Component {
    render () {
        return (
            <React.Fragment>
                <h1>task center</h1>
                <p>123</p>
                {/* <Group /> */}
                <TaskList />
            </React.Fragment>
        )
    }
}

export default Hello