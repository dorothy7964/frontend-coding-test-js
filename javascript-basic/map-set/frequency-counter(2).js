/* =========================================
  값 개수 세기
========================================= */

// 숫자 배열 arr에서 각 숫자의 등장 횟수를 구하라
// 결과는 key-value 형태

function solution(arr) {
  const map = new Map();

  arr.forEach((num) => {
    map.set(num, (map.get(num) ?? 0) + 1);
  });

  return map;
}

const output = solution([10, 10, 20, 20, 20, 30]);
console.log(output);

/* =========================================
  || vs ?? 차이
========================================= */

/*
  || (OR 연산자)
  - falsy 값 모두를 걸러냄
  - (false, 0, '', null, undefined, NaN)

  예)
  0 || 10        → 10
  '' || '기본값' → '기본값'
*/

/*
  ?? (Nullish Coalescing)
  - null, undefined만 걸러냄
  - 나머지 값은 그대로 유지

  예)
  0 ?? 10        → 0
  '' ?? '기본값' → ''
*/

/*
  ✅ 언제 쓰냐
  - 값이 “없을 때만” 기본값 넣고 싶다 → ?? 사용
  - falsy 전부 막고 싶다 → || 사용
*/
