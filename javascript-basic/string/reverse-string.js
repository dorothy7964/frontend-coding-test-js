/* =========================================
  문자열 뒤집기
========================================= */

// 문자열 str이 주어지면, 뒤집은 문자열을 반환하라

function solution(str) {
  return str.split("").reverse().join("");
}

const output = solution("HELLO WORLD");
console.log(output);
