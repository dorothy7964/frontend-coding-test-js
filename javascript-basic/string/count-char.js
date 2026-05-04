/* =========================================
  특정 문자 개수 세기
========================================= */

// 문자열 str과 문자 target이 주어질 때
// target이 몇 번 등장하는지 반환하라

function solution(str, target) {
  return str.split(target).length - 1;
}

const output = solution("HELLO WORLD", "L");
console.log(output);
