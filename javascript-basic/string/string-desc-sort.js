/* =========================================
  문자열 내림차순 정렬
========================================= */

// 문자열 str을 알파벳 기준 내림차순 정렬

function solution(str) {
  return str.replace(/ /g, "").split("").sort().reverse().join("");
}

const output = solution("hello world");
console.log(output);
