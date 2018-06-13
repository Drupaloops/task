import { BrowserRouter, Route } from 'react-router-dom'

import Hello from '../view/hello'


const routes = [
    {
        path: '/',
        exact: true,
        component: Hello
    },
    {
        path: '/about',
        component: About
    }
]


const AppRouter = () => (
    <BrowserRouter>
        <Route path="/test" component={Hello} />
    </BrowserRouter>
)
export default AppRouter