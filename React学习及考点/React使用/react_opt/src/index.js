import React from "react";
import { render } from 'react-dom'
// 引入别名
// import 'bootstrap'
// 不打包lodash，通过cdn引入，全局变量为_
// import { debounce, throttle } from 'lodash'

import { HashRouter, Route, Link } from 'react-router-dom'


import { dynamic } from './utils'
const LazyHome = dynamic(() => import(/*webpackPrefetch:true*/'./components/Home'))
const LazyUser = dynamic(() => import(/*webpackPrefetch:true*/'./components/User'))




render(
    <div>
        <HashRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User</Link></li>
            </ul>
            <Route exact={true} path="/" component={LazyHome} />
            <Route path="/user" component={LazyUser} />
        </HashRouter>
    </div>
    , document.querySelector('#root')
)