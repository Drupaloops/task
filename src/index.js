import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'

// import Hello from './pages/hello'
// import About from './pages/about'

import routes from './route'

ReactDOM.render(
    <BrowserRouter>
        <div>
            {/* react-router 内只允许存在一个子元素，所以用div包裹 */}
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/helo">helo</Link></li>
            </ul>
            { renderRoutes(routes) }
        </div>
    </BrowserRouter>,
    document.getElementById('app')
)