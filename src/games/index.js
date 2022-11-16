import {gameController} from './game.js'
import {calcGame} from "./calcGame/calcGame.js";
import {isEvenGame} from "./is-even-game/is-even-game.js";
import {gcdGame} from "./gcdGame/gcdGame.js";
import {progressionGame} from "./progressionGame/progression.js";
import {isSimpleNumberGame} from "./simpleNumberGame/simpleNumber.js";

export function init() {
	gameController.start(progressionGame);
}
