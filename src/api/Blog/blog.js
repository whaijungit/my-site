// 获取文章接口
import requset from '../Request/request';

/**
 * 获取分页文章列表数据
 * @param {number} page 页码
 * @param {number} limit 每页显示多少条数据
 * @param {number} catgoryid 文章分类
 * @param {string} keyword 搜索关键字
 */
export async function getBlogs(page = 1, limit = 10, catgoryid = -1) {
  return await requset.get('/api/blog', {
    params: {
      page,
      limit,
      catgoryid,
    }
  })
}

/**
 * 获取博客分类
 */
export async function getBlogCategory() {
  return await requset.get('/api/blogtype')
}

/**
 * 获取单个博客文章
 * @param {string} id 
 */
export async function getBlog(id) {
  return await requset.get('/api/blog/' + id)
}

/**
 * 提交评论 
 * @param {stirng} nickname
 * @param {string} content 
 * @param {string} blogId 
 */
export async function postComment(nickname, content, blogId) {
  return await requset.post('/api/comment', {
    params: {
      nickname,
      content,
      blogId
    }
  })
}

/**
 * 分页获取评论
 * @param {number} page 
 * @param {number} limit 
 * @param {string} blogId 
 */
export async function getComments(page, limit, blogId) {
  return await requset.get('/api/comment', {
    params: {
      page,
      limit,
      blogId
    }
  })
}