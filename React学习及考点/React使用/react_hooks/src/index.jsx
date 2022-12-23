import React from "react";
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Table from './pages/Table'
import Drag from './pages/Drag'
import Form from './pages/Form'
import Animation from './pages/Animation'

render(
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Router>
                    <ul className="nav nav-tabs">
                        <li><Link to="/table">Table</Link></li>
                        <li><Link to="/drag">Drag</Link></li>
                        <li><Link to="/form">Form</Link></li>
                        <li><Link to="/animation">Animation</Link></li>
                    </ul>
                    <Route path="/table" component={Table} />
                    <Route path="/drag" component={Drag} />
                    <Route path="/form" component={Form} />
                    <Route path="/animation" component={Animation} />
                </Router>
            </div>
        </div>
    </div>
    , document.querySelector('#root')
)