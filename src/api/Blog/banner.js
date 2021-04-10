import request from '../Request/request'

export async function getBanners(url) {
  return await request.get(url)
}

