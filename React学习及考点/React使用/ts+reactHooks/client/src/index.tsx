import React from "react";
import { render } from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './assets/style/common.less'
import Home from './routes/Home'    // routes路由(页面)组件 一个组件对应一个页面
import Mine from './routes/Mine'
import Profile from './routes/Profile'
import { ConnectedRouter } from 'connected-react-router' // 路由库
import history from '@/history'
import Tabs from '@/components/Tabs'
import Register from './routes/Register'
import Login from './routes/Login'




render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider>
                <main className="main-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </main>
                <Tabs />
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)