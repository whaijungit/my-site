import Home from '../views/Home'
import About from '../views/About'
import Blog from '../views/Blog'
import BlogDetail from '../views/Blog/Detail'
import Message from '../views/Message'
import Project from '../views/Project'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Blog',
    component: Blog
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryid",
    component: Blog
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: BlogDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  }
]