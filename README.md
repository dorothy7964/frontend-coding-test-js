# Frontend Coding Test JS Study

JavaScript 코딩테스트 학습 저장소입니다.  
매일 `today.js`에서 문제를 풀고, 완료된 코드는 자동 저장 스크립트로 정리합니다.

<br/><br/>

## Skills

- JavaScript (ES6+)
- Array / String / Object
- Map / Set / Stack / Queue
- DFS / BFS / Greedy / Hash

<br/><br/>

## Goal

- 주 5회 문제 풀이
- 프로그래머스 Level2 달성
- 실전 코딩테스트 대비

<br/><br/>

## Project Structure

> ☑ 현재 사용 중  
> ☐ 추후 추가 예정

```text
frontend-coding-test-js/
│
├── ☑ README.md
├── ☑ package.json
├── ☑ save.js
│
├── ☐ programmers/
│   ├── ☐ level1/
│   ├── ☐ level2/
│   └── ☐ sql/
│
├── ☐ baekjoon/
│   ├── ☐ bronze/
│   ├── ☐ silver/
│   └── ☐ gold/
│
├── ☑ javascript-basic/
│   ├── ☑ today/
│   │   └── ☑ today.js
│   ├── ☑ array/
│   ├── ☑ string/
│   ├── ☑ map-set/
│   └── ☐ sort/
│
├── ☐ patterns/
│   ├── ☐ dfs-bfs/
│   ├── ☐ stack-queue/
│   ├── ☐ hash/
│   └── ☐ greedy/
│
└── ☑ notes/
    ├── ☐ time-complexity.md
    ├── ☐ input-output.md
    └── ☑ mistake-note.md
```

<br/><br/>

## Save Script

today.js에서 풀이한 코드를 원하는 폴더로 자동 저장하는 스크립트입니다.<br/>
폴더가 없으면 자동 생성되며, 같은 파일명이 있으면 번호를 붙여 중복 저장을 방지합니다.

<br/><br/>

### 사용법

```
npm run save [folder] [file-name]
```

### 예시

```
npm run save string reverse-string
```

### 저장 결과

```
javascript-basic/string/reverse-string.js
```

### 중복 파일명이 있을 경우

```
reverse-string.js
reverse-string(1).js
reverse-string(2).js
```

<br/><br/>

## Commit Convention

- solve: 문제 풀이 완료
- retry: 오답 다시 풀이 / 재도전
- alt : 다른 풀이 방식 구현
- study: 알고리즘 개념 학습
- refactor: 기존 풀이 개선
- docs: README / 노트 정리
- test: 테스트 코드 / 예제 추가
- init: 초기 세팅 / 폴더 생성
- feat: 기능 추가 / 스크립트 추가

<br/><br/>
