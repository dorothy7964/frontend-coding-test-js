/* =========================================
  짝지어 제거하기
========================================= */

// 문자열에서 연속으로 같은 문자 2개가 붙어있으면 제거한다.
// 더 이상 제거가 불가능할 때 남은 문자열이 비어있으면 성공이다.

function solution(s) {
  const stack = [];

  for (let ch of s) {
    if (stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
}

const output = solution("ABBA");
// const output = solution("ABCD");
// const output = solution("AABB");
// const output = solution("BAAC");
// const output = solution("ABCCBA");

console.log(output);

// JS에서는 이 비교가 가능함: undefined === 'A'
