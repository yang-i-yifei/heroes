// 程序的入口
// 加载vue模块 CommonJS的模块化语法
// const Vue = require('vue')

// ES6中的模块化的语法，导入模块
import Vue from 'vue'

// 根组件
import App from './App.vue'

// 引入外部样式
// import './xxx/index.css'

// 提示当前处在开发模式, false 不提示
Vue.config.productionTip = false

// new Vue({
//   el: '#app'
// })

new Vue({
  render: createElement => createElement(App),
}).$mount('#app')
