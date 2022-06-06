function solution(a, b, i = -1) {
	return Array(Math.abs(b - a) + 1).fill(a > b ? b : a).map(num => {
			i++;
			return num + i;
		}).reduce((pre, cur) => pre + cur, 0);
}
