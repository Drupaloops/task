import Hello from '../pages/hello'
import About from '../pages/about'

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

export default routes