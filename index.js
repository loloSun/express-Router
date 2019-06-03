var express = require('express')
var app = express()

// 示例路由
app.get('/router',function(req,res){
    res.send('这是一个示例路由')
})

// express.Router()
// 获取路由示例
var router = express.Router()

// 路由中间件：每当有一个request请求都会执行
router.use(function(req, res, next) {
    // 打印 request 的 method 和 url
    console.log(req.method, req.url);   // GET /  
    // 继续处理 request 请求，寻找匹配的路由
    next(); 
  });

// home页面路由
router.get('/',function(req,res){
    res.send('这是 home 页')
})
// about页面路由
router.get('/about', function(req, res) {
    res.send('这是 about 页'); 
});


// 创建参数中间件 express.param()
router.param('name', function(req, res, next, name) {
    // 在这里进行校验操作
    console.log('执行名称验证' + name);
    // 校验通过我们把校验后的名字赋值给req对象
    req.name = name;
    // 继续处理request请求，寻找匹配的路由
    next(); 
  });
// 带参数的路由
router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
    // localhost:3000/app/hello/sxq      hello sxq!
});

 
// 把定义好的路由集成到node应用中
// app.use('/',router)    // 默认路由

// 把定义好的路由集成到Node应用中
app.use('/app', router);


// 链式路由
app.route('/login')
    // 展示登录界面
    .get(function(req, res) {
        res.send('this is the login form');
})
    // 提交登录表单
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
});

// 将不同的路由分离到不同的路由文件中
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen('3030',function(){
    console.log('OK')
})