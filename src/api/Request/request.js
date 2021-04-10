import axios from 'axios'
import { showMessage } from '@/utils'

const request = axios.create();

request.interceptors.response.use(function (resp) {
  if (resp.data.code === 200) {
    showMessage({
      content: resp.data.msg,
      type: resp.data.type,
      duration: 5000,
    })
    return resp.data.data
  } else {
    showMessage({
      content: resp.data.msg,
      type: resp.data.type,
      duration: 5000,
    });
    return null;
  }
})

export default request;