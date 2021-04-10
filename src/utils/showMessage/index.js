import getComponentRootDom from '@/utils/common/getComponentRootDom'
import Icon from '@/components/Icon'
import styles from '@/utils/showMessage/Message.module.less'

/**
 * 弹出消息
 * @param {Object} options {content:'请求成功',type:'success',container:'<div id="app"></div>', durtaion: 2000}
 */
export default function (options = {}) {
  const content = options.content || 'Message';
  const type = options.type || 'info';
  const container = options.container || document.body;
  const durtaion = options.durtaion || 2000;
  const div = document.createElement('div');
  const typeClassName = styles[`message-${type}`];
  div.className = `${styles.message} ${typeClassName}`;
  const el = getComponentRootDom(Icon, { type });
  div.innerHTML = `<span class="${styles.icon}">${el.outerHTML}</span><div>${content}<div>`;
  if (getComputedStyle(container).position && getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
    container.style.height = '100vh';
  }
  else {
    div.style.position = styles.message
    container.appendChild(div);
  }
  container.appendChild(div)
  div.clientWidth;
  div.style.opacity = 1;
  div.style.transform = "translate(-50%,-50%)";
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = 'translate(-50%,-50%) translateY(-15px)';
    div.addEventListener('transitionend', () => {
      div.remove();
      options.callback && options.callback();
    }, { once: true })
  }, durtaion)
}
