import Game from "../modules/Game.mjs";
let game;
document.addEventListener("DOMContentLoaded", () => {
  game = new Game(".container");
  game.startGame();
});
// export default game;
