// for testing and using 'node index.js'

function solution(s) {
	return !/p|y/gi.test(s) ? true : s.match(/p/gi).length == s.match(/y/gi).length ? true : false;
}

// console.log(/p|P/g.exec('pPyY'));
console.log('pPyY'.match(/p/gi).length);

function solution(s) {
	return !/p|y/gi.test(s) ? true : s.match(/p/gi).length == s.match(/y/gi).length ? true : false;
}

function solution(arr, divisor) {
	return arr.filter(value => value % divisor == 0).length === 0 ? [-1] : arr.filter(value => value % divisor == 0).sort((a, b) => a - b);
}
