// for testing and using 'node index.js'

function solution(x, n) {
	return new Array(n).fill(0).map((_, index) => x * (index + 1));
}

console.log(solution(2, 6));
