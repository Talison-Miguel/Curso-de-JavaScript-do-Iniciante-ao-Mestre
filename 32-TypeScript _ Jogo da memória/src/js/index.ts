import { cards } from "./Card";
import { Game } from "./Game";

const gameDom = document.querySelector('[data-game]') as HTMLDivElement 

const game = new Game(gameDom, cards)
game.init()

console.log(cards)
