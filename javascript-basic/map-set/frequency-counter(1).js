/* =========================================
  값 개수 세기
========================================= */

// 숫자 배열 arr에서 각 숫자의 등장 횟수를 구하라
// 결과는 key-value 형태

function solution(arr) {
  const map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return map;
}

const output = solution([10, 10, 20, 20, 20, 30]);
console.log(output);
