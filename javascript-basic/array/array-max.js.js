/* =========================================
  배열 최댓값 구하기
========================================= */

// 숫자 배열 arr이 주어질 때 최댓값을 반환하라

function solution(arr) {
  return Math.max(...arr);
}

const output = solution([8, 9, 20, 1, 16]);
console.log(output);
