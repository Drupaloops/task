import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Hello from './pages/hello'
import About from './pages/about'


ReactDOM.render(
    <BrowserRouter
        // basename="/oops"
        // forceRefresh={false}
        // getUserConfirmation={getConfirmation()}
        // keyLength={12}
    >
        <div>
            {/* react-router 内只允许存在一个子元素，所以用div包裹 */}
            <Route exact path="/" component={Hello} />
            <Route path="/helo" component={About} />
        </div>
    </BrowserRouter>,
    document.getElementById('app')
)