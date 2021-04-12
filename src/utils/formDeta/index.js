export default function (timer) {
  const date = new Date(+timer);
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const day = (date.getDate() + 1).toString().padStart(2, "0")
  return `${date.getFullYear}-${month}-${day}`
}