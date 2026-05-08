/* =========================================
  올바른 괄호
========================================= */

// 괄호 문자열 `s`가 주어진다.
// 괄호가 올바르게 짝지어져 있는지 확인하라.

function solution(s) {
  const stack = [];

  for (const ch of s) {
    if (ch === "(") {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

// const output = solution("()()"); // true
// const output = solution("(())()"); // true
// const output = solution(")()("); // false
const output = solution("(()("); // false
console.log(output);
