// { event1: [handler1,handler2,handler3] }, {event2:[处理函数 handler1,handler2,handler3]}
const listeners = {}
export default {
  /**
   * 监听事件
   * @param {Event} eventName 
   * @param {function} handler 
   */
  $on(eventName, handler) {
    if (!listeners[eventName]) {
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(handler)
  },
  /**
   * 停止监听事件
   * @param {Event} eventName 
   * @param {function} handler 
   */
  $off(eventName, handler) {
    if (!listeners[eventName]) {
      return;
    }
    listeners[eventName].delete(handler)
  },
  /**
   * 触发事件
   * @param {Event} eventName 
   * @param  {Array} args 
   */
  $meit(eventName, ...args) {
    if (!listeners[eventName]) {
      return;
    }
    for (const handler of listeners[eventName]) {
      handler(...args)
    }
  }
}