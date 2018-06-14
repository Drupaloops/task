import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { matchRoutes, renderRoutes } from "react-router-config"

import Hello from './pages/hello'
import About from './pages/about'



ReactDOM.render(
    <BrowserRouter>
        <div>
            {/* react-router 内只允许存在一个子元素，所以用div包裹 */}
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/helo">helo</Link></li>
            </ul>
            <Route exact path="/" component={Hello} />
            <Route path="/helo" component={About} />
        </div>
    </BrowserRouter>,
    document.getElementById('app')
)