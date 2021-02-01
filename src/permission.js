import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  //显示进度条效果开始
  NProgress.start()
  //获取设置浏览器的标题
  document.title = getPageTitle(to.meta.title)
  //页面是否需要鉴权,设置为true的时候才需要鉴权,否则直接允许进入指定路由页面
  //如果用户信息不存在,那么直接跳转到首页,禁止跳转,官网不需要token,那么跳转的是管理后台的登录页面
  if (to.meta.requestAuth && !getToken()) {
    next({ path: '/login' })
    //关闭进度条
    NProgress.done()
  } else {
    next()
    //关闭进度条
    NProgress.done()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
