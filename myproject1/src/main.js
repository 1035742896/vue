// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// element-ui 必须在app之前引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import db from './utils/localstorage'
import request from './utils/request'
//导入全局样式
import './assets/css/grobal.css'
//导入第三方图标样式库
import './assets/fonts/iconfont.css'


Vue.use(ElementUI)
Vue.use(db)

// Vue.prototype.$xx  自定义方法 在vue中通过this.$xx调用
Vue.prototype.$db = db

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
