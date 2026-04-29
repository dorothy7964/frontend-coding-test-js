/* =========================================
  짝수만 필터링
========================================= */

// 숫자 배열 arr이 주어질 때 짝수만 담은 배열 반환

function solution(arr) {
  return arr.filter((v) => v % 2 === 0);
}

const output = solution([8, 9, 20, 1, 16]);
console.log(output);
