/* 숫자들 중에서 최솟값을 출력하는 함수를 만들어라. */

const funcSolution01 = (...arrNumArg) => {
	return Math.min(...arrNumArg);
};

console.log(funcSolution01(5, 2, 4, 3)); // 2

/* 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어진다. 세 막대로 삼각형을 만들 수 있는지 판별하는 함수를 만들어라. */

const funcSolution02 = (arrNumArg) => {
	return arrNumArg.reduce((pre, cur) => pre + cur, 0) - arrNumArg.sort((a, b) => b - a)[0] > 0 ? true : false;
};

console.log(funcSolution02([3, 2, 5])); // false;

/* 1인당 연필을 1자루씩 나누어 준다고 할때, N명의 학생수를 입력받고, 연필 몇 다스가 필요한지 출력하는 함수를 만들어라. */

const funcSolution03 = (numArg) => {
	return Math.ceil(numArg / 12);
};

console.log(funcSolution03(2));

/* 자연수 N이 입력되면, 1부터 N까지의 합을 출력하는 함수를 만들어라. */

const funcSolution04 = (numArg) => {
	let answer = 0;
	for (let i = 1; i <= numArg; i++) {
		answer += i;
	}
	return answer;
};

console.log(funcSolution04(5)); // 15

/* 자연수가 요소로 들어있는 배열이 입력되면, 그 중 가장 작은 최솟값을 출력하는 함수를 만들어라. */

const funcSolution05 = (arrNumArg) => {
	return Math.min(...arrNumArg);
};

console.log(funcSolution05([2, 5, 3, 4])); // 2

const funcSolution06 = (arrNumArg) => {
	return [arrNumArg.filter((value) => value % 2 == 1).reduce((pre, cur) => pre + cur, 0), Math.min(...arrNumArg.filter((value) => value % 2 == 1))];
};

console.log(funcSolution06([12, 44, 37, 63, 41, 53, 92, 85])); // [[37, 63, 41, 53, 85], 41]

/* 인자가 9개인 숫자가 담긴 배열을 입력받아 7개의 인자가 합이 100인 인자들을 배열에 담아 출력하는 함수를 만들어라. */

const funcSolution07 = (arrNumArg) => {
	let i = 0;
	let j = 1;
	while (i < arrNumArg.length - 1) {
		while (j < arrNumArg.length) {
			if (arrNumArg[i] + arrNumArg[j] == 100) {
				arrNumArg.splice(j, 1);
				arrNumArg.splice(i, 1);
				break;
			}
			j++;
		}
		j = 0;
		i++;
	}
	return arrNumArg;
};

console.log(funcSolution07([20, 7, 23, 19, 10, 15, 25, 8, 13])); // [20, 7, 23, 19, 10, 8, 13]

/* 문자열 두 자리 숫자를 담고 있는 배열과 숫자를 입력받아, 문자열 숫자의 일의 자리 숫자와 두 번째 인자로 받은 숫자가 일치하는지 확인하고, 몇개가 일치하는지 확인하는 함수를 만들어라. */

const funcSolution08 = (arrStrArg, numArg) => {
	return arrStrArg.filter((value) => parseInt(value[0]) % (numArg % 10) == 0).length;
};

console.log(funcSolution08(['11', '14', '24', '62', '73', '29', '00', '23'], 3)); // 2

/* 대문자로 이루어진 알파벳이 입력되면 단어에 포함된 ‘A’를 모두 ‘#’으로 바꾸어 출력하는 함수를 만들어라. */

const funcSolution09 = (strArg) => {
	return strArg.replace(/A/g, '#');
};

console.log(funcSolution09('BANANA')); // B#N#N#

/* 문자열 한개와 특정 문자열을 입력받아, 문자열안에 특정 문자열이 몇개 있는지 알아내는 함수를 만들어라. */

const funcSolution10 = (strFirstArg, strSecondArg) => {
	let numResult = 0;
	strFirstArg.split('').forEach((value) => value == strSecondArg && numResult++);
	return numResult;
};
console.log(funcSolution10('COMPUTER PROGRAMMING', 'R')); // 3

/* 문자열을 입력받아 해당 문자열에 대문자가 몇 개 있는지 출력하는 함수를 만들어라. */

const funcSolution11 = (strArg) => {
	const strUpperArg = strArg.toUpperCase().split('').filter(value => value != ' ');
	let numResult = 0;
	strArg.split('').filter(value => value != ' ').forEach((value, index) => value == strUpperArg[index] && numResult++);
	return numResult;
}

console.log(funcSolution11('Korea Time Good')); // 3