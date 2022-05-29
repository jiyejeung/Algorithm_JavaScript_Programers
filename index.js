// for testing and using 'node index.js'

function solution(a, b) {
	var greatestCommonDivisor = getGreatestCommonDivisor(a, b);
	var lcm = (a * b) / greatestCommonDivisor;

	return [greatestCommonDivisor, lcm];
}

function getGreatestCommonDivisor(a, b) {
	if (b == 0) return a;
	return a > b ? getGreatestCommonDivisor(b, a % b) : getGreatestCommonDivisor(a, b % a);
}
