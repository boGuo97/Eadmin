import Vue from "vue";
import App from "./App.vue";

// 引入reset.css
import './assets/style/css/reset.css'

// 引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入路由
import router from "./router";

// 引入vuex
import store from "./store";

import cookies from '@/libs/cookies.js'

// 引入自定义element配置
import './plugin/evAdmin/setting.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    if(cookies.get('tabs-open-page') && cookies.get('tabs-open-current')) {
      this.$store.commit('tabs/init', [
        {
          list: JSON.parse(cookies.get('tabs-open-page')),
          name: cookies.get('tabs-open-current')
        }
      ])
    }
    this.$store.commit('theme/init')
  },
  render: h => h(App)
}).$mount("#app");
