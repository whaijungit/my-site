import request from "../Request/request";

export async function getAbout() {
  return await request.get('/api/about')
}