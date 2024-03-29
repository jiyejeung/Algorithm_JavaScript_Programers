# 자바스크립트 알고리즘(프로그래머스)

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
process.stdin.on('data', data => {
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

### 1-9. 짝수와 홀수

<br>

<img src="./image/image09.png">

```javascript
function solution(num) {
	return num % 2 ? 'Odd' : 'Even';
}
```

### 1-10. 제일 작은 수 제거하기

<br>

<img src="./image/image10.png">

```javascript
function solution(arr) {
	return arr.length === 1 ? [-1] : arr.filter(num => num != Math.min(...arr));
}
```

### 1-11. 정수 제곱근 판별

<br>

<img src="./image/image11.png">

```javascript
function solution(n) {
	return Math.sqrt(n) == parseInt(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}
```

### 1-12. 정수 내림차순으로 배치하기

<br>

<img src="./image/image12.png">

```javascript
function solution(numArg) {
	return +String(numArg)
		.split('')
		.sort((a, b) => b - a)
		.join('');
}
```

### 1-13. 자연수 뒤집어 배열로 만들기

<br>

<img src="./image/image13.png">

```javascript
function solution(n) {
	return n
		.toString()
		.split('')
		.reverse()
		.map(num => +num);
}
```

### 1-14. 자릿수 더하기

<br>

<img src="./image/image14.png">

```javascript
function solution(n) {
	return n
		.toString()
		.split('')
		.map(num => +num)
		.reduce((pre, cur) => pre + cur, 0);
}
```

### 1-15. 이상한 문자 만들기

<br>

<img src="./image/image15.png">

```javascript
function solution(s) {
	return s
		.split(' ')
		.map(str =>
			str
				.split('')
				.map((spell, index) => (index % 2 ? spell.toLowerCase() : spell.toUpperCase()))
				.join('')
		)
		.join(' ');
}
```

### 1-16. 약수의 합

<br>

<img src="./image/image16.png">

```javascript
function solution(n) {
	let result = 0;
	for (let i = 1; i <= Math.sqrt(n); i++) {
		for (let j = n; j >= Math.sqrt(n); j--) {
			(i * j == n && i != j && (result += i + j)) || (i * j == n && i == j && (result += i));
		}
	}
	return result;
}

function solution(n) {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		n % i === 0 && (result += i);
	}
	return result;
}
```

### 1-17. 문자열을 정수로 만들기

<br>

<img src="./image/image17.png">

```javascript
function solution(s) {
	return +s;
}
```

### 1-18. 수박수박수박수박수박수?

<br>

<img src="./image/image18.png">

```javascript
function solution(n) {
	let result = '';
	for (let i = 0; i < n; i++) {
		result += i % 2 ? '박' : '수';
	}
	return result;
}
```

### 1-19. 서울에서 김서방 찾기

<br>

<img src="./image/image19.png">

```javascript
function solution(seoul) {
	return `김서방은 ${seoul.findIndex(str => str === 'Kim')}에 있다`;
}
```

### 1-20. 문자열 다루기 기본

<br>

<img src="./image/image20.png">

```javascript
function solution(s) {
	return /^\d{4}$|^\d{6}$/.test(s);
}
```

### 1-21. 문자열 내림차순으로 배치하기

<br>

<img src="./image/image21.png">

```javascript
function solution(s) {
	const upper = s
		.split('')
		.filter(str => /[A-Z]/.test(str))
		.sort((a, b) => b.charCodeAt() - a.charCodeAt())
		.join('');
	const lower = s
		.split('')
		.filter(str => /[a-z]/.test(str))
		.sort((a, b) => b.charCodeAt() - a.charCodeAt())
		.join('');
	return lower + upper;
}
```

### 1-22. 문자열 내 p와 y의 개수

<br>

<img src="./image/image22.png">

```javascript
function solution(s) {
	return (s.match(/p/gi) || []).length == (s.match(/y/gi) || []).length;
}
```

### 1-23. 두 정수 사이의 합

<br>

<img src="./image/image23.png">

```javascript
function solution(a, b, i = -1) {
	return Array(Math.abs(b - a) + 1)
		.fill(a > b ? b : a)
		.map((num, index) => num + index)
		.reduce((pre, cur) => pre + cur, 0);
}
```

### 1-24. 나누어 떨어지는 숫자 배열

<br>

<img src="./image/image24.png">

```javascript
function solution(arr, divisor) {
	return arr.filter(num => num % divisor == 0).length ? arr.filter(num => num % divisor == 0).sort((a, b) => a - b) : [-1];
}
```

### 1-25. 예산

<br>

<img src="./image/image25.png">

```javascript
function solution(d, budget) {
	return d
		.sort((a, b) => a - b)
		.filter(num => {
			budget = budget - num;
			return budget >= 0;
		}).length;
}
```

### 1-26. 부족한 금액 계산하기

<br>

<img src="./image/image26.png">

```javascript
function solution(price, money, count) {
	let i = 1;
	let num = 0;
	while (i <= count) {
		num += price * i;
		i++;
	}
	return money - num > 0 ? 0 : Math.abs(money - num);
}
```

### 1-27. 나머지가 1이 되는 수 찾기

<br>

<img src="./image/image27.png">

```javascript
function solution(n) {
	for (let x = 2; ; x++) {
		if (n % x === 1) return x;
	}
}
```

### 1-28. K번째 수

<br>

<img src="./image/image28.png">

```javascript
function solution() {
	return commands.map(arr => array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1]);
}
```

### 1-29. 2016년

<br>

<img src="./image/image29.png">

```javascript
function solution(a, b) {
	const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const date = new Date(`2016/${a}/${b}`);
	return days[date.getDay()];
}
```

### 1-30. 음양 더하기

<br>

<img src="./image/image30.png">

```javascript
function solution(absolutes, signs) {
	return absolutes.map((num, index) => (signs[index] ? num : -num)).reduce((pre, cur) => pre + cur, 0);
}
```

### 1-31. 없는 숫자 더하기

<br>

<img src="./image/image31.png">

```javascript
function solution(numbers) {
	return 45 - numbers.reduce((pre, cur) => pre + cur, 0);
}
```

### 1-32. 완주하지 못한 선수

<br>

<img src="./image/image32.png">

```javascript
function solution(participant, completion) {
	participant = participant.sort();
	completion = completion.sort();

	for (let i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) return participant[i];
	}
}
```

### 1-33. 숫자 문자열과 영단어

<br>

<img src="./image/image33.png">

```javascript
function solution(s) {
	return +s.replace(/zero/g, 0).replace(/one/g, 1).replace(/two/g, 2).replace(/three/g, 3).replace(/four/g, 4).replace(/five/g, 5).replace(/six/g, 6).replace(/seven/g, 7).replace(/eight/g, 8).replace(/nine/g, 9);
}
```

### 1-34. [1차] 비밀지도

<br>

<img src="./image/image34.png">

```javascript
function solution(n, arr1, arr2) {
	const result = new Array(n).fill(0).map(() => new Array(n).fill(' '));
	const addZero = num => (num.length === n ? num : addZero('0' + num));

	arr1 = arr1.map(num => (num.toString(2).length !== n ? addZero(num.toString(2)) : num.toString(2)));
	arr2 = arr2.map(num => (num.toString(2).length !== n ? addZero(num.toString(2)) : num.toString(2)));

	return result.map((arr, i) => arr.map((v, j) => (+arr1[i][j] + +arr2[i][j] ? '#' : v)).join(''));
}
```

### 1-35. 내적

<br>

<img src="./image/image35.png">

```javascript
function solution(a, b) {
	return a.map((value, index) => value * b[index]).reduce((pre, cur) => pre + cur, 0);
}
```

### 1-36. 크레인 인형뽑기 게임

<br>

<img src="./image/image36-01.png">
<img src="./image/image36-02.png">
<img src="./image/image36-03.png">
<img src="./image/image36-04.png">

```javascript
function solution(board, moves) {
	let count = 0;
	const result = [];

	for (let i = 0; i < moves.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[j][moves[i] - 1] != 0) {
				result.push(board[j][moves[i] - 1]);
				board[j][moves[i] - 1] = 0;
				break;
			}
		}
	}

	for (let k = 0; k < result.length - 1; k++) {
		if (result[k] == result[k + 1]) {
			result.splice(k, 2) && ((count += 2), (k = 0));
			k -= 1;
		}
	}

	return count;
}
```

### 1-37. 모의고사

<br>

<img src="./image/image48.png">

```javascript
function solution(answers) {
	const arrNumPattern01 = [1, 2, 3, 4, 5];
	const arrNumPattern02 = [2, 1, 2, 3, 2, 4, 2, 5];
	const arrNumPattern03 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	const arrNumScore = [
		{ 1: answers.filter((value, index) => value == arrNumPattern01[index % arrNumPattern01.length]).length },
		{ 2: answers.filter((value, index) => value == arrNumPattern02[index % arrNumPattern02.length]).length },
		{ 3: answers.filter((value, index) => value == arrNumPattern03[index % arrNumPattern03.length]).length },
	];
	const numMax = Math.max(arrNumScore[0][1], arrNumScore[1][2], arrNumScore[2][3]);
	let i = 0;
	const result = [];
	while (i < arrNumScore.length) {
		for (let key in arrNumScore[i]) {
			arrNumScore[i][key] == numMax && result.push(parseInt(key));
		}
		i++;
	}
	return result;
}
```

<br>

## 2. 2단계 문제

<br>

### 2-1. 최댓값과 최솟값

<br>

<img src="./image/image37.png">

```javascript
function solution(n) {
	const arr = n.split(' ');
	let maxNum = parseInt(arr[0]);
	let minNum = parseInt(arr[0]);
	for (let i = 0; i < arr.length; i++) {
		parseInt(arr[i]) > maxNum && (maxNum = parseInt(arr[i]));
		parseInt(arr[i]) < minNum && (minNum = parseInt(arr[i]));
	}

	return minNum + ' ' + maxNum;
}

function solution(n) {
	return `${Math.min(...n.split(' ').map(v => +v))} ${Math.max(...n.split(' ').map(v => +v))}`;
}
```

### 2-2. JadenCase 문자열 만들기

<br>

<img src="./image/image38.png">

```javascript
function solution(s) {
	return s
		.split(' ')
		.map(value01 =>
			value01.split('').map(value02 => {
				value02 = value02.toLowerCase();
				return value02;
			})
		)
		.map(value03 => {
			value03[0] = typeof value03[0] == 'string' ? value03[0].toUpperCase() : value03[0];
			return value03.join('');
		})
		.join(' ');
}
```

### 2-3. 행렬의 곱셈

<br>

<img src="./image/image38.png">

```javascript
function solution(arr1, arr2) {
	return arr1.map(row => arr2[0].map((v, i) => row.reduce((pre, cur, j) => pre + cur * arr2[j][i], 0)));
}
```

### 2-4. 피보나치 수

<br>

<img src="./image/image40.png">

```javascript
function solution(n) {
	const arrNum = [0, 1];
	let numCount = 0;
	while (n > 1) {
		let numSum = (arrNum[arrNum.length - 2] + arrNum[arrNum.length - 1]) % 1234567;
		arrNum.push(numSum);
		numCount++;
		n--;
	}
	return arrNum[arrNum.length - 1];
}
```

### 2-5. 최솟값 만들기

<br>

<img src="./image/image41.png">

```javascript
function solution(A, B) {
	const arrNumA = A.sort((a, b) => a - b);
	const arrNumB = B.sort((a, b) => b - a);
	return arrNumA.reduce((pre, cur, index) => pre + cur * arrNumB[index], 0);
}
```

### 2-6. 숫자의 표현

<br>

<img src="./image/image42.png">

```javascript
function solution(n) {
	let result = 0;
	for (let i = 0; i < n; i++) {
		let num = 0;
		for (let j = n - i; j > 0; j--) {
			num += j;
			if (num === n) {
				result++;
				break;
			}
			if (num > n) break;
		}
	}
	return result;
}
```

### 2-7. 다음 큰 숫자

<br>

<img src="./image/image43.png">

```javascript
function solution(n) {
	const numAnswer = n
		.toString(2)
		.split('')
		.reduce((pre, cur) => pre + +cur, 0);
	n++;
	while (
		n
			.toString(2)
			.split('')
			.reduce((pre, cur) => pre + +cur, 0) != numAnswer
	) {
		n++;
	}
	return n;
}
```

### 2-8. 올바른 괄호

<br>

<img src="./image/image44.png">

```javascript
function solution(s) {
	let numResult = 0;
	let i = 0;
	while (i < s.length) {
		s[i] == '(' && numResult++;
		if (numResult == 0) return false;
		s[i] == ')' && numResult--;
		i++;
	}
	return numResult == 0 ? true : false;
}
```

### 2-9. 영어 끝말잇기

<br>

<img src="./image/image45.png">

```javascript
function solution(n, words) {
	let index = 0;
	let turn = 0;
	const solution = new Set([words[0]]);

	for (let i = 0; i < words.length - 1; i++) {
		if (words[i][words[i].length - 1] === words[i + 1][0]) solution.add(words[i + 1]);
		if (solution.size !== i + 2) {
			index = (solution.size % n) + 1;
			turn = Math.ceil((solution.size + 1) / n);
			break;
		}
	}

	return [index, turn];
}
```

### 2-10. H-index

<br>

<img src="./image/image46.png">

```javascript
function solution(citations) {
	let result = 0;
	citations.sort((a, b) => b - a);
	while (result + 1 <= citations[result]) {
		result++;
	}
	return result;
}
```

### 2-11. 기능개발

<br>

<img src="./image/image47.png">

```javascript
function solution(progresses, speeds) {
	const result = [];
	while (progresses.length > 0) {
		let i = 0;
		let numCount = 0;
		progresses = progresses.map((_, index, array) => array[index] + speeds[index]);
		while (i < progresses.length) {
			if (progresses[i] < 100) break;
			if (progresses[i] >= 100 && progresses.shift() && speeds.shift()) {
				numCount++;
				continue;
			}
			i++;
		}
		numCount > 0 && result.push(numCount);
	}
	return result;
}
```
