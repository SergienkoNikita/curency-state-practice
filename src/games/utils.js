const RANDOM_NUM_DEFAULT_RANGE = 100;

export function firstCharToUpperCase(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRandomNum(endRange = RANDOM_NUM_DEFAULT_RANGE, startRange = 0) {
	return Math.floor(Math.random() * (endRange - startRange)) + startRange;
}

export function getRandomProgression () {
	const randomLength = getRandomNum(20, 5);
	const firstNum = getRandomNum();
	const stage = getRandomNum(10, 2);

	let progressionArray = [ ];

	for (let a = 1; a < randomLength; a += 1) {
		let stageProgression = firstNum + stage * a;
		progressionArray.push(stageProgression);
	}

	return progressionArray
}