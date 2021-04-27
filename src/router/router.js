import { getPageComponent } from '@/utils'
import NonFont404 from '@/views/NotFont'
export default [
  {
    path: '/',
    name: 'Home',
    component: getPageComponent(() => import('@/views/Home')),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/article',
    name: 'Blog',
    component: getPageComponent(() => import('@/views/Blog')),
    meta: {
      title: '博客'
    }
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryid",
    component: getPageComponent(() => import('@/views/Blog')),
    meta: {
      title: '博客分类页'
    }
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() => import('@/views/Blog/Detail')), //"@/views/Blog/Detail"
    meta: {
      title: '文章详情'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: getPageComponent(() => import('@/views/About')),
    meta: {
      title: '关于我'
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: getPageComponent(() => import('@/views/Message')),
    meta: {
      title: '留言板'
    }
  },
  {
    path: '/project',
    name: 'Project',
    component: getPageComponent(() => import('@/views/Project')),
    meta: {
      title: '项目&效果'
    }
  },
  {
    name: 'NonFont404',
    path: '*',
    component: NonFont404,
  }
]