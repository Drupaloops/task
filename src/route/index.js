import { BrowserRouter, Route } from 'react-router-dom'

import Hello from '../view/hello'
const AppRouter = () => (
    <BrowserRouter>
        <Route path="/test" component={Hello} />
    </BrowserRouter>
)
export default AppRouter