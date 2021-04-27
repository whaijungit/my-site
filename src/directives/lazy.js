import eventBus from '@/eventBus'
import { debounce } from '@/utils'
import defaultImage from '@/assets/image/default1.gif'

let imgs = [];

function setImage(img) {
  img.dom.src = defaultImage
  const clienHeight = document.documentElement.clienHeight
  const rect = img.dom.getBoundingClientRect()
  const height = img.height || 200
  if (rect.top < -height || rect.top > clienHeight) {
    const tempImg = new Image();
    tempImg.onload = function () {
      img.dom.src = img.src
    }
    tempImg.src = img.src;
    imgs = imgs.filter(i => i !== img)
  }
}

function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

function handleScroll(dom) {
  setImages(dom)
}
eventBus.$on('mainScroll', debounce(handleScroll, 50))

export default {
  inserted(el, bindings) {
    imgs.push({
      dom: el,
      src: bindings.value,
    })
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el)
  }
}