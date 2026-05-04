/* =========================================
  평균 구하기
========================================= */

// 숫자 배열 arr의 평균을 구하라

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

const output = solution([85, 95, 70, 80]);
console.log(output);
