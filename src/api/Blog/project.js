import request from "../Request/request";

export async function getProject() {
  return await request.get('/api/project')
}