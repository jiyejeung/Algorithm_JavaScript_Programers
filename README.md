## 자바스크립트 알고리즘(프로그래머스)

<br>

## 목표 🙌🏻

- README.md 파일에 사진과 코드를 기록으로 남기고, 다른 사람들의 코드도 분석하며, 알고리즘 실력을 향상시킨다.
- 클린 코딩을 생활화하고, 깊이 있는 학습을 목표한다.

<br>

## 준수사항 ❗️

- 배열의 고차함수를 적극적으로 사용하며, 메모리의 사용을 최소화한다.
- 문제 설명과 제한 조건이 기록된 이미지 파일을 같이 첨부하고, 코드 또한 README.md 파일에 기록한다.

<br>

## 1. 1단계 문제

<br>

### 1-1. 별찍기

<br>

<img src="./image/image01.png">

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
	const n = data.split(' ');
	const a = Number(n[0]);
	const b = Number(n[1]);

	console.log(`${'*'.repeat(a)} \n`.repeat(b));
});
```

<br>

### 1-2. x만큼 간격이 있는 n숫자

<br>

<img src="./image/image02.png">

```javascript
function solution(x, n) {
	return new Array(n).fill(0).map((_, index) => x * (index + 1));
}
```

<br>

### 1-3. 행렬의 덧셈

<br>

<img src="./image/image03.png">

```javascript
function solution(arr1, arr2) {
	return arr1.map((arr, index01) => arr.map((value, index02) => value + arr2[index01][index02]));
}
```

<br>

### 1-4. 핸드폰 번호 가리기

<br>

<img src="./image/image04.png">

```javascript
function solution(phoneNumber) {
	return phoneNumber
		.split('')
		.map((str, index) => (phoneNumber.length - index > 4 ? '*' : str))
		.join('');
}

function solution(phoneNumber) {
	return '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(phoneNumber.length - 4, phoneNumber.length);
}
```

### 1-5. 하샤드 수

<br>

<img src="./image/image05.png">

```javascript
function solution(x) {
	return (
		x %
			x
				.toString()
				.split('')
				.reduce((pre, cur) => pre + parseInt(cur), 0) ===
		0
	);
}
```

### 1-6. 평균 구하기

<br>

<img src="./image/image06.png">

```javascript
function solution(arr) {
	return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
}
```

### 1-7. 콜라츠 추측

<br>

<img src="./image/image07.png">

```javascript
function solution(argNum) {
	let numCount = 0;
	while (argNum != 1) {
		if (numCount >= 500) {
			break;
		}
		(argNum % 2 == 1 && (argNum = argNum * 3 + 1)) || (argNum % 2 == 0 && (argNum = argNum / 2));
		numCount++;
	}
	return argNum == 1 ? numCount : -1;
}
```

### 1-8. 최대공약수와 최소 공배수

<br>

<img src="./image/image08.png">

```javascript
function solution(a, b) {
	var greatestCommonDivisor = getGreatestCommonDivisor(a, b);
	var lcm = (a * b) / greatestCommonDivisor;

	return [greatestCommonDivisor, lcm];
}

function getGreatestCommonDivisor(a, b) {
	if (b == 0) return a;
	return a > b ? getGreatestCommonDivisor(b, a % b) : getGreatestCommonDivisor(a, b % a);
}
```
