const fs = require("fs");
const path = require("path");

const [, , category, filename] = process.argv;

if (!category || !filename) {
  console.log("사용법: npm run save string reverse-string");
  process.exit(1);
}

const source = path.join(__dirname, "javascript-basic", "today", "today.js");
const targetDir = path.join(__dirname, "javascript-basic", category);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 기본 파일명
let target = path.join(targetDir, `${filename}.js`);
let count = 1;

// 이미 있으면 번호 증가
while (fs.existsSync(target)) {
  target = path.join(targetDir, `${filename}(${count}).js`);
  count++;
}

fs.copyFileSync(source, target);

console.log(`저장 완료: ${path.basename(target)}`);
