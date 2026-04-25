# Mistake Note

코딩테스트 풀이 중 실수한 내용과 다시 기억할 점을 정리합니다.

<br/>

## [예시] 2026-04-25

### 프로그래머스 - mock-test

#### 실수

- `sort()` 숫자 정렬인데 compare 함수 없이 사용함
- `return answer` 빼먹음
- 배열 길이보다 큰 인덱스 접근함

#### 다시 기억할 점

```js
arr.sort((a, b) => a - b);
```
