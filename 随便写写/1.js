// var arr = [1, 3, 5, 6, 7]
// arr.map(it => {
//   console.log(it);
// })

// const flatarr = arr.flatMap(x => x ** 2)


var nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;


// console.log(nums[0] = nums.length - 1, nums)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 查找元素为val
  const arr = nums.slice();
  arr.some((it, index) => {
    if (it === val) {

    }
  })
  // console.log(arr);
  return arr // 2, nums = [2,2]
};
const arr = removeElement(nums, val)

const proms = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// for (let i = 0; i < 10; i++) {
//   proms.push(new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log(i + "完成");
//       resolve(i)
//     }, getRandom(1000, 3000))
//   }))
// }

/**
 * 返回数据类型
 * @param {any} data 
 * @returns type
 */
function callExprossion(data) {
  if (data instanceof Array) {
    return 'Array'
  }
  else if (data === null || data === undefined || isNaN(data)) {
    throw TypeError(`不能传null undefined NaN`)
  }
  else {
    return typeof data
  }
}


function callExpression(args) {
  console.log(...args);
}

callExpression([1, 2, 3, 4, 5, 6, 7])