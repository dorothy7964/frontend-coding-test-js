/* =========================================
  두 개 뽑아서 더하기
========================================= */

// 정수 배열 arr가 주어진다.
// 배열에서 서로 다른 두 원소를 골라 더해서 만들 수 있는 모든 합을 구하고,
// 그 결과를 중복 없이 오름차순 정렬해서 반환하라.

/** 조건
  같은 인덱스는 사용할 수 없다.
  같은 값이라도 다른 원소면 조합 가능
  결과는 중복 제거 + 오름차순 정렬
 */

function solution(arr) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      set.add(arr[i] + arr[j]);
    }
  }

  return [...set].sort((a, b) => a - b);
}

const output = solution([2, 1, 3, 4, 1]);

console.log(output);
