/* =========================================
  폰켓몬
========================================= */

// arr는 항상 짝수 개의 원소를 가진다.

// N마리의 폰켓몬이 있다.
// 폰켓몬 종류는 숫자로 구분한다.
//
// 나는 N마리 중 절반(N/2)만 가져갈 수 있다.
//
// 최대한 다양한 종류의 폰켓몬을 선택하려고 할 때,
// 선택 가능한 최대 종류 수를 return 하라.

function solution(arr) {
  const set = new Set(arr); // 중복 제거
  const kinds = set.size; // 종류 수
  const max = arr.length / 2; // 선택 가능한 마리 수

  return Math.min(kinds, max);
}

const output = solution([1, 2, 2, 3, 3, 5, 6, 7]);

console.log(output);
