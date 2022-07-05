'use strict';

function solution(numArg) {
	const numAnswer = numArg
		.toString(2)
		.split('')
		.reduce((pre, cur) => pre + +cur, 0);
	numArg++;
	while (
		numArg
			.toString(2)
			.split('')
			.reduce((pre, cur) => pre + +cur, 0) != numAnswer
	) {
		numArg++;
	}
	return numArg;
}
