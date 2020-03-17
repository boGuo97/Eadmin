import Vue from "vue"
import VueRouter from "vue-router"

// 引入路由主体
import routes from './router.js'

// 引入顶部进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ easing: 'ease', speed: 500 })

// 处理路由重复点击报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return VueRouterPush.call(this, location).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return VueRouterReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
  // 开启进度条
  NProgress.start()
  next()
})

router.afterEach(to => {
  // 关闭进度条
  NProgress.done()
})

export default router
