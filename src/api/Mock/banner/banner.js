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
      title: '标题1',
      descriptiom: '描述1'
    },
    {
      id: '2',
      midImg: require('@/assets/image/mid/evermoingmid.jpg'),
      bigImg: require('@/assets/image/big/evermoingbig.jpg'),
      title: '标题2',
      descriptiom: '描述2'
    },
    {
      id: '3',
      midImg: require('@/assets/image/mid/evermoingmid.jpg'),
      bigImg: require('@/assets/image/big/evermoingbig.jpg'),
      title: '标题3',
      descriptiom: '描述5'
    },
    {
      id: '4',
      midImg: require('@/assets/image/mid/evermoingmid.jpg'),
      bigImg: require('@/assets/image/big/evermoingbig.jpg'),
      title: '标题4',
      descriptiom: '描述4'
    }
  ]
})