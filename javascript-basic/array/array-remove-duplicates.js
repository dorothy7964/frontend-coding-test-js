/* =========================================
  중복 제거
========================================= */

// 숫자 배열 arr에서 중복을 제거한 배열 반환

function solution(arr) {
  return [...new Set(arr)];
}

const output = solution([20, 9, 20, 1, 16, 20]);
console.log(output);
