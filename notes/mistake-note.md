# Mistake Note

코딩테스트 풀이 중 실수한 내용과 다시 기억할 점을 정리합니다.

<br/><br/>

## Sliding Window

### 연속 부분 수열 합의 개수

#### 실수

- 처음에 3중 반복문(O(n³))으로만 생각함
- 슬라이딩 윈도우로 이전 구간 합을 재활용할 수 있다는 점을 놓침
- start + windowSize - 1 의 의미를 이해하지 못함
- windowSize가 이동할 때마다 바뀌는 값이라고 착각함

#### 다시 기억할 점

- 현재 구간 합에서 맨 앞 값만 빼고 새로 들어오는 값만 더하면 된다.
- 슬라이딩 윈도우는 구간 합을 매번 처음부터 계산하지 않는다.

```js
// windowSize는 현재 윈도우 길이이며,
// 안쪽 반복문에서는 고정된 상태로 한 칸씩 이동한다.

// 윈도우에서 빠지는 값: startIndex - 1
currentSum -= circle[startIndex - 1];

// 윈도우에 새로 들어오는 값: startIndex + windowSize - 1
currentSum += circle[startIndex + windowSize - 1];
```

<br/><br/>
