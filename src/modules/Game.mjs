import World from "./World.mjs";
import Player from "./player.mjs";
const tools = document.querySelector(".tools");
class Game {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
  }

  startGame() {
    const generateWorld = new World();
    const player = new Player();
    let world = generateWorld.generateWorld(this.container, player);
    this.updateWorld(world);
  }

  updateWorld(world) {}

  resetGame() {}
}

export default Game;
