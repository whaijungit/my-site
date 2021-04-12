import Mock from 'mockjs'

Mock.mock(/\/api\/banner$/, 'get', {
  code: 200,
  msg: '请求成功',
  type: 'success',
  data: [
    {
      id: '1',
      midImg: require('@/assets/image/mid/evermoingmid.jpg'),
      bigImg: require('@/assets/image/big/evermoingbig.jpg'),
      title: '春宵',
      description: '春宵一刻值千金、花有清香月有阴'
    },
    {
      id: '2',
      midImg: require('@/assets/image/mid/evermoingmid.jpg'),
      bigImg: require('@/assets/image/big/evermoingbig.jpg'),
      title: '标题2',
      description: '描述2'
    },
    {
      id: '3',
      midImg: require('@/assets/image/mid/evermoingmid.jpg'),
      bigImg: require('@/assets/image/big/evermoingbig.jpg'),
      title: '标题3',
      description: '描述5'
    },
    {
      id: '4',
      midImg: require('@/assets/image/mid/evermoingmid.jpg'),
      bigImg: require('@/assets/image/big/evermoingbig.jpg'),
      title: '标题4',
      description: '描述4'
    }
  ]
})