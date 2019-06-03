# Express 路由
## 初始化 安装express
```
npm init -y
npm install express
```

## express.Router()
- 在实际开发中通常有几十甚至上百的路由，都写在 index.js 既臃肿又不好维护，这时可以使用 express.Router 实现更优雅的路由解决方案
- 每个路由文件通过生成一个 express.Router 实例 router 并导出，通过 app.use 挂载到不同的路径。
- 在实际开发中推荐使用 express.Router 将不同的路由分离到不同的路由文件中。

## router.use()
- 在代码中，中间件和路由的位置顺序非常重要。一个request请求到来时，它们会按照代码中的先后顺序依次执行。这就意味着如果你把中间件写在某一个路由的后面，路由会拦截这个request请求并完成响应，中间件则永远不会被执行。

## 带参数的路由 /hello/:name
- 想要在URL中传递一个人的名字name，让输出 Hello name! 这里可以使用带参数的路由

## 参数中间件 express.param()
- 如果想要校验传入URL的人的名字，确保名字是符合规范的，我们需要在路由中间件中去校验URL中的参数name。它有个特殊的名字，参数中间件。我们可以使用express.param()去创建它

## 链式路由 app.route()
- 我们也可以直接在app对象上创建路由。利用app.route()可以针对一个路由定义多个路由处理函数。例如，对/login路由发起get请求，展示登录界面，同时也可以对/login路由发起post请求，提交登录表单信息。我们就可以使用app.route来创建这个/login路由。

## 总结
使用Express中的路由，我们可以更灵活的定义路由：
- 多次使用express.Router()定义一组路由
- 使用express.Router()划分模块，并用app.use()把他们整合起来
- 使用路由中间件对request请求进行预处理
- 使用参数中间.param()件对URL中参数进行校验
- 使用app.route()创建链式路由