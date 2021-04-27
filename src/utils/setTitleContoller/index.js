let routeTitle = '',
  sietTitle = '';
function setTitle() {
  if (!routeTitle || !sietTitle) {
    document.title = 'loading...'
  }
  else if (routeTitle && !sietTitle) {
    document.title = routeTitle
  }
  else if (!routeTitle && sietTitle) {
    document.title = sietTitle
  } else {
    document.title = `${routeTitle}-${sietTitle}`
  }
}

export default {
  // 控制路由标题
  setRouterTitle(title) {
    routeTitle = title;
    setTitle()
  },
  // 控制网站标题
  setSietTitle(title) {
    sietTitle = title
    setTitle()
  }
}