/* 
    React-router 路由模式
    1. hash模式(默认)，如 http://so.com/#/trend/popular
        适用于toC业务，移动端

    2. H5 history模式，如 http://so.com/trend/popular
        需要服务端支持，因此无特殊需求可选择hash模式
        适用于toB业务，PC端，中后台项目
*/

import React from 'react'
import {
    HashRouter as Router,   // hash模式
    // BrowserRouter as Router, // history模式
    Switch,
    Route
} from 'react-router-dom'


function RouterComponent() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/project/:id">
                    <Project />
                </Route>
                <Route path="*">
                    {/* 404组件 */}
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}


