// 程序的入口
// 加载vue模块 CommonJS的模块化语法
// const Vue = require('vue')

// ES6中的模块化的语法，导入模块
import Vue from 'vue'

// 根组件
import App from './App.vue'


// 引入外部样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'


// 提示当前处在开发模式, false 不提示
Vue.config.productionTip = false
//导入vue-router
import vueRouter from 'vue-router'
//注册vuerouter插件  
Vue.use(vueRouter)

//导入组件
import HeroList from './views/hero/hero.vue'
//创建路有对象
const router = new vueRouter({
  routes:[
    {path:'/',redirect:{name:'hero'}},
    {name:'hero',path:'/hero',component:HeroList}
  ]
})



new Vue({
  render: createElement => createElement(App),
  router
}).$mount('#app')
