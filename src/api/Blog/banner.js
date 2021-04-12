import request from '../Request/request'

export async function getBanners() {
  return await request.get("/api/banner")
}

