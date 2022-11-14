import {gameController} from './game.js'
import {isCalcGame} from "./calcGame/calcGame.js";
import {isEvenGame} from "./is-even-game/is-even-game.js";
import {isGcdGame} from "./gcdGame/gcdGame.js";
import {isProgressionGame} from "./progression/progression.js";

export function init() {
	gameController.start(isProgressionGame);
}
