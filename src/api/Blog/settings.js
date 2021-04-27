import request from '@/api/Request/request';

export async function getSettings() {
  return await request.get('/api/setting')
}