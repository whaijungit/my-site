import Mock from 'mockjs'
import QRcode from '@/assets/image/QRcode.jpg'
import Avatar from '@/assets/image/avatar.jpg'

Mock.mock("/api/setting", "get", {
  code: 200,
  msg: '请求成功',
  data: {
    avatar: Avatar,
    siteTitle: '同学T',
    github: 'https://github.com/whaijungit',
    githubName: 'whaijungit',
    qq: '1033161981',
    mail: '1033161981@qq.com',
    QRcode: QRcode,
    weixin: 'ScvioKey',
    weixinQRcode: QRcode,
  }
})