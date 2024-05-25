class Player {
  tool;
  static resourse = undefined;
  items = { leaf: 0, stone: 0, wood: 0, ground: 0, "ground-land": 0 };

  selectTool(tool) {
    if (tool.classList[1] == "bag") {
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("flex-container");
      const resourses = ["leaf", "wood", "stone", "ground", "ground-land"];

      for (let i = 0; i < resourses.length; i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("flex-item", `${resourses[i]}`);
        childDiv.addEventListener("click", function () {
          if (Player.resourse != childDiv) {
            if (Player.resourse != undefined) {
              Player.resourse.classList.remove("flex-item-clicked");
            }
            if (childDiv.children[0].innerHTML > 0) {
              childDiv.classList.add("flex-item-clicked");
              Player.resourse = childDiv;
            } else {
              childDiv.classList.add("vibrate");
              setTimeout(() => {
                childDiv.classList.remove("vibrate");
              }, 1000);
            }
          } else {
            Player.resourse = undefined;
            childDiv.classList.remove("flex-item-clicked");
          }
        });
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        numberDiv.textContent = this.items[`${resourses[i]}`];
        childDiv.appendChild(numberDiv);
        containerDiv.appendChild(childDiv);
      }

      if (tool != this.tool) {
        tool.insertAdjacentElement("afterend", containerDiv);
      } else {
        const tools = document.querySelector(".tools");
        tools.removeChild(tools.children[4]);
      }
    }
    if (tool == this.tool) {
      this.tool.classList.remove(`${this.tool.classList[2]}`);
      this.tool = undefined;
      return;
    }
    if (this.tool != undefined) {
      this.tool.classList.remove(`${this.tool.classList[2]}`);
    }
    this.tool = tool;
    tool.classList.add(`${tool.classList[1]}-click`);
    return tool.classList[1];
  }
  addItem(resourse) {
    this.items[`${resourse}`]++;
  }
  removeItem(resourse) {
    if (this.items[`${resourse}`] > 0) {
      this.items[`${resourse}`]--;
      return true;
    } else return false;
  }
}

export default Player;
