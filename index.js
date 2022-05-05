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
