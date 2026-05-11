/* =========================================
  완주하지 못한 선수
========================================= */

// 수많은 마라톤 선수들이 마라톤에 참여했다.
// 단 한 명의 선수를 제외하고는 모두 마라톤을 완주했다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,

// 완주하지 못한 선수의 이름을 return 하도록 함수를 작성해라.

// 제한사항
// 참가자 수는 1명 이상 100,000명 이하
// completion 길이는 participant 길이보다 1 작다
// 참가자의 이름은 1개 이상 20개 이하 알파벳 소문자
// 동명이인이 있을 수 있다

function solution(part, comp) {
  const partMap = new Map();

  // 참가자 이름 개수 저장
  for (const p of part) {
    partMap.set(p, (partMap.get(p) ?? 0) + 1);
  }

  // 완주한 사람 이름 개수 차감
  for (const c of comp) {
    partMap.set(c, partMap.get(c) - 1);
  }

  // 값이 1 이상 남아있는 사람이 완주 못한 사람
  for (const [name, count] of partMap) {
    if (count > 0) return name;
  }
}

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];
const output = solution(participant, completion);

console.log(output);
