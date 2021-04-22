export function debounce(handle,duration) {
  let timer;
  
  return (...arg) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      handle(...arg)
    }, duration);
  };
}