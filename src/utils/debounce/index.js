export default function (handle, duration) {
  let timer;
  return (...arg) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      handle(...arg)
    }, duration);
  };
}