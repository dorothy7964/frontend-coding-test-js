/* =========================================
  가장 많이 등장한 값 찾기 (최빈값)
========================================= */

// 숫자 배열 arr에서 가장 많이 등장한 값을 반환

function solution(arr) {
  const map = new Map();
  let max = 0;
  let mostNumber = 0;

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      mostNumber = key;
    }
  }

  return mostNumber;
}

const output = solution([10, 10, 20, 20, 20, 30]);
console.log(output);
