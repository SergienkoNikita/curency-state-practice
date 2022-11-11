import {gameController} from './game.js'
import {isCalcGame} from "./calcGame/calcGame.js";

export function init() {
	gameController.start(isCalcGame);
}
