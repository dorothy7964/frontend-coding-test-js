/* =========================================
  두 배열 합치고 정렬
========================================= */

// 두 배열 arr1, arr2를 합쳐서 오름차순 정렬

function solution(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
  // 중복 제거 + 숫자 정렬까지 한 번에
  // return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

const output = solution([9, 1, 5, 4], [5, 3, 7, 8]);
console.log(output);
