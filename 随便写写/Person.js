function delay(duartion) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('成功')
      } else {
        reject('失败')
      }
    }, duration)
  })
}

async function delay(duartion) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, duartion)
  })
}

async function getData() {
  return await delay(300) === 1;
}

const result = getData()
console.log(result);