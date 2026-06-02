/* =========================================
  연속 부분 수열 합의 개수
========================================= */

/** 
  정수로 이루어진 배열 arr가 있다.
  이 배열은 원형으로 연결된 수열이라고 가정한다.

  즉, 배열의 마지막 원소 다음에는 다시 첫 번째 원소가 이어진다.

  이때, 길이가 1 이상 n 이하인 연속한 부분 수열을 모두 고려했을 때,
  각 부분 수열의 합으로 만들 수 있는 서로 다른 값의 개수를 구하라.
 */

// 패턴: Sliding Window, Set, Circular Array

function solution(numbers) {
  // 중복 없는 합 저장
  const sumSet = new Set();

  // 원래 배열 길이
  const length = numbers.length;

  // 원형 배열 처리
  const circle = [...numbers, ...numbers];

  // 부분 수열 길이 선택
  for (let windowSize = 1; windowSize <= length; windowSize++) {
    console.log("📢 1_windowSize === ", windowSize);

    // 첫 번째 구간 합 만들기
    let currentSum = 0;

    for (let index = 0; index < windowSize; index++) {
      console.log("📢 2_배열인덱스 index  === ", index);

      currentSum += circle[index];
    }
    sumSet.add(currentSum);

    // 한 칸씩 이동
    for (let startIndex = 1; startIndex < length; startIndex++) {
      console.log("📢 3_한칸씩이동 startIndex  === ", startIndex);

      // 맨 앞 값 제거
      currentSum -= circle[startIndex - 1];

      // 새로 들어오는 값 추가
      currentSum += circle[startIndex + windowSize - 1];

      sumSet.add(currentSum);
    }
  }

  console.log("📢 3_합 sumSet  === ", sumSet);
  return sumSet.size;
}

const output = solution([7, 9, 1, 1, 4]);

console.log(output);
