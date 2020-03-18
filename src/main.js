import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 安装第三方插件  开始
  // element-ui
  import ElementUi from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUi);

  // axios 插件
  import axios from 'axios';
  Vue.prototype.$axios = axios;
  // 拦截请求
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // iconfont 
  import './static/css/iconfont.css';

  // vue-bus 插件
  import vueBus from 'vue-bus';
  Vue.use(vueBus);

  // animate.css
  import './static/css/animate.min.css';
// 安装第三方插件  结束

// 路由跳转拦截  开始

router.beforeEach((to,from,next)=>{
  if (to.meta.requiredAth){ // 路由是否需要跳转
    if (localStorage.getItem('token')){
      next();
    }else{
      next({
        path: '/', // 未登录则跳转至login页面
        // query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
      })
    }
  }else{
    if (to.path == '/'){
      localStorage.removeItem("token")
    }
    next();
  }
})

// 路由跳转拦截  结束



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
