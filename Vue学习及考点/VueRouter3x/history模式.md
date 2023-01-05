# H5 history模式
`vue-router`模式是hash模式，URL上会带上hash的标识符#

如果不想要丑的#号，可以使用history模式，该模式利用`history.pushState` API完成跳转
```javascript
const router = new VueRouter({
    mode: 'history',
    routes: [...]
})
```
history模式需要后端路由配置支持，如果访问一个路由而后端没有正确的配置，那么就会返回404

所以，需要在后端增加个候选资源，如果匹配不到路由，则返回`index.html`页面

## nginx配置
```javascript
location / {
    try_files $uri $uri/ /index.html
}
```

## express
利用`connect-history-api-fallback 中间件`
```javascript
const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

// 使用该中间件，默认回退到index.html
app.use(history())
```

### 警告⚠️
后端这样处理之后，有一个问题就是所有路径都返回`index.html`。为了避免这个情况，需要覆盖所有的路由情况，然后再给出一个 404 页面
```javascript
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '*', component: NotFoundComponent }
    ]
})
```