//
import eventBus from '@/eventBus'
import { debounce } from '@/utils'
import defaultImage from '@/assets/image/default1.gif'

let imgs = [];

function setImage(img) {
  if (img.handle) {
    return;
  }
  img.handle = true;
}

function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

function handleScroll(dom) {
  setImage(dom)
}

eventBus.$on('mainScroll', debounce(handleScroll, 50))

export default {
  bind(el, bindings) {
    imgs.push({
      dom: el,
      src: bindings.value,
      handle: false
    })
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el)
  }
}