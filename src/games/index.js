import {gameController} from './game.js'
import {isCalcGame} from "./calcGame/calcGame.js";
import {isEvenGame} from "./is-even-game/is-even-game.js";
import {isGcdGame} from "./gcdGame/gcdGame.js";

export function init() {
	gameController.start(isGcdGame);
}
