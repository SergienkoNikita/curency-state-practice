import {gameController} from './game.js'
import {isCalcGame} from "./calcGame/calcGame.js";
import {isEvenGame} from "./is-even-game/is-even-game.js";
import {isGcdGame} from "./gcdGame/gcdGame.js";
import {isProgressionGame} from "./progressionGame/progression.js";
import {isSimpleNumberGame} from "./simpleNumberGame/simpleNumber.js";

export function init() {
	gameController.start(isSimpleNumberGame);
}
