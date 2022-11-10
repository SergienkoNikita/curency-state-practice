export function firstCharToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRandomNumber() {
     return Math.floor(Math.random() * 100);
}

export function getRandomOperator () {
    let random = Math.floor(Math.random() * 4);
    let operator
    if (random <= 1) {
        operator = ' + '
    }
    if (random === 2) {
        operator = ' - '
    }
    if (random === 3) {
        operator = ' * '
    }
    return operator;
}
