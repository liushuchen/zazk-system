import Vue from 'vue'
import Router from 'vue-router'
//管理后台基础
import Layout from '@/layout'
//官网基础
import Website from '@/views/website/Website'

Vue.use(Router)
/*参数描述:
* hidden是否在管理后台菜单隐藏
* icon:管理后台菜单显示icon
* requestAuth:是否需要登录
* title:浏览器title显示文案
* component:组件地址
* path:路由地址
* name:路由name,一般首字母大写
* children:子集菜单结构......
*  */
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    hidden: true,
    meta: {
      requestAuth: false,
      title: '登录页面'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true,
    meta: {
      requestAuth: false,
      title: '404'
    }
  },
  {
    path: '/',
    component: Website,
    redirect: '/home',
    hidden: true,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/website/Home'),
        meta: {
          requestAuth: false,
          title: '首页'
        }
      }, {
        path: '/newsInformation/:position',
        name: 'NewsInformation',
        component: () => import('@/views/website/NewsInformation'),
        meta: {
          requestAuth: false,
          title: '新闻动态'
        }
      }, {
        path: '/research/:position',
        name: 'Research',
        component: () => import('@/views/website/Research'),
        meta: {
          requestAuth: false,
          title: '调查研究'
        }
      }, {
        path: '/cooperation/:position',
        name: 'Cooperation',
        component: () => import('@/views/website/Cooperation'),
        meta: {
          requestAuth: false,
          title: '交流合作'
        }
      }, {
        path: '/askChina/:position',
        name: 'AskChina',
        component: () => import('@/views/website/AskChina'),
        meta: {
          requestAuth: false,
          title: '问矿中国'
        }
      }, {
        path: '/about/:position',
        name: 'About',
        component: () => import('@/views/website/About'),
        meta: {
          requestAuth: false,
          title: '关于我们'
        }
      }
    ]
  },
  /**/
  {
    path: 'dashboard',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      requestAuth: false,
      title: '仪表盘',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          requestAuth: false,
          title: '仪表盘',
          icon: 'dashboard'
        }
      },
      {
        path: '/dashboard1',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          requestAuth: false,
          title: '仪表盘',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '*',//如果路由找不到,统一跳转致404页面
    redirect: '/404',
    hidden: true,
    meta: {
      requestAuth: false,
      title: '404'
    }
  }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
