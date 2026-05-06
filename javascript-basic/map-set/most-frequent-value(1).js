/* =========================================
  가장 많이 등장한 값 찾기 (최빈값)
========================================= */

// 숫자 배열 arr에서 가장 많이 등장한 값을 반환

function solution(arr) {
  const map = new Map();
  let max = 0;
  let mostNumber = null;

  for (let num of arr) {
    const count = (map.get(num) ?? 0) + 1;
    map.set(num, count);

    // 카운팅하면서 동시에 max 갱신
    if (count > max) {
      max = count;
      mostNumber = num;
    }
  }

  return mostNumber;
}

const output = solution([10, 10, 20, 20, 20, 30]);
console.log(output);
