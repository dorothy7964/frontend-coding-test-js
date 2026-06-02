# Mistake Note

코딩테스트 풀이 중 실수한 내용과 다시 기억할 점을 정리합니다.

<br/><br/>

## Sliding Window

### 연속 부분 수열 합의 개수

#### 실수

- 부분 수열 길이 선택할 때 windewSize의 의미를 이해하지 못함
- 한 칸씩 이동할때 같은 windowSize 창문 이동을 이해하지 못함

#### 다시 기억할 점

- start - 1 → 빠지는 값
- start + windowSize - 1 → 새로 들어오는 값

```js
// 빠지는 값
currentSum -= circle[startIndex - 1];

// 새로 들어오는 값 추가
currentSum += circle[startIndex + windowSize - 1];
```

<br/><br/>
