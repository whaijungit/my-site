import Mock from 'mockjs'

Mock.mock('/api/about', 'get', {
  code: 200,
  msg: '',
  data:{
    src: 'http://rleonardi.com/interactive-resume/'
  }
})