const fs = require("fs");
const path = require("path");

// npm run save array reverse
// npm run save patterns stack-queue test2

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("사용법: npm run save [폴더경로...] 파일명");
  process.exit(1);
}

// 마지막은 파일명
const filename = args.pop();

// 나머지는 폴더 경로
const folderPath = args;

// today 파일 고정
const source = path.join(__dirname, "javascript-basic", "today", "today.js");

// 저장 폴더
const targetDir = path.join(__dirname, "javascript-basic", ...folderPath);

// 폴더 생성
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 파일명 생성
let target = path.join(targetDir, `${filename}.js`);
let count = 1;

// 중복 처리
while (fs.existsSync(target)) {
  target = path.join(targetDir, `${filename}(${count}).js`);
  count++;
}

// 복사
fs.copyFileSync(source, target);

console.log(`저장 완료: ${path.relative(__dirname, target)}`);
