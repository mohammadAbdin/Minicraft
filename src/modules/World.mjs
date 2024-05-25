// import Player from "./player.mjs";
import logics from "../models/Constants.mjs";
import Player from "./player.mjs";
// let player;
class World {
  generateWorld(container, player) {
    const cellSize = 5;
    const rows = Math.floor(100 / cellSize);
    const cols = Math.floor(100 / cellSize);

    container.innerHTML = "";

    container.style.setProperty("--rows", rows);
    container.style.setProperty("--cols", cols);

    for (let i = 0; i < rows * cols; i++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      container.appendChild(div);
      div.addEventListener("click", () => {
        if (player.tool != undefined) {
          if (logics(player.tool.classList[1], div.className.split(" ").pop()))
            this.removeTile(div, player);
        } else if (Player.resourse != undefined) {
          this.addTile(div, player);
        }
      });
    }
    const grid_items = document.querySelectorAll(".grid-item");
    for (let k = rows * cols - 1; (k - (rows * cols) / 2) % rows >= 0; k--) {
      if ((k + 1 - (rows * cols) / 2) / rows <= 1) {
        grid_items[k].classList.add("ground-land");
      } else if ((k + 1 - (rows * cols) / 2) / rows <= 2) {
        grid_items[k].classList.add("stone");
      } else grid_items[k].classList.add("ground");
    }
    grid_items[Math.floor(((rows - 1) * cols) / 2)].classList.add("player");
    for (let i = 0; i <= (rows * cols) / 2; i++) {
      if (i / rows > 6 && (i % cols == 6 || i % cols == 17)) {
        grid_items[i].classList.add("wood");
        grid_items[i - cols * 4].classList.add("leaf");
        grid_items[i + 1 - cols * 4].classList.add("leaf");
        grid_items[i - 1 - cols * 4].classList.add("leaf");
      }
    }
    const tools = document.querySelectorAll(".tool");
    tools.forEach((tool) => {
      tool.addEventListener("click", function () {
        player.selectTool(tool);
      });
    });

    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    return player;
  }
  addTile(item, player) {
    if (player.removeItem(Player.resourse.classList[1]))
      item.classList.add(Player.resourse.classList[1]);
  }
  removeTile(item, player) {
    const lastWord = item.className.split(" ").pop();

    if (lastWord != "grid-item" && lastWord != "player") {
      player.addItem(lastWord);
      item.classList.remove(lastWord);
    }
  }
}
export default World;
