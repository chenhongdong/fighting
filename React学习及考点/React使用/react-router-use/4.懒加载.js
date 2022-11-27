import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))

const App = () => {
    <Router>
        <Suspense fallback={<div>正在加载...</div>}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Suspense>
    </Router>
}