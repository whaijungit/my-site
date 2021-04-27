import 'nprogress/nprogress.css';
import { start, done, configure } from 'nprogress/nprogress'

configure({
  trickleSpeed: 20,
  showSpinner:false
})

function delay(duartion) {
  return new Promise(reslove => {
    setTimeout(() => {
      reslove()
    }, duartion);
  })
}
export default function (pageCompReslove) {
  return async () => {
    // 等待一段时间
    start()
    if (process.env.NODE_ENV === 'development') {
      await delay(3000);
    }
    const comp = await pageCompReslove(/**webpackchukName: chu */)
    // promise resolve了要结束进度条
    done()
    return comp
  }
}
