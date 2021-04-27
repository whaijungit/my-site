import Mock from 'mockjs';

Mock.mock('/api/project', 'get', {
  code: 200,
  msg: '',
  "data|10-20": [
    {
      id: "@uuid",
      "name": '@ctitle(1,10)',
      'url|1': ['@url', null],
      'github|1': ["@url", null],
      "description|1-14": ['@cparagraph(1,5)'],
      thumb: '@image(300x250,@color,#fff,@natural)',
    },
  ]
})