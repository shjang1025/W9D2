
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    el.appendChild(this.setupBoard());
  }
  
  setupBoard() {
      const ul = document.createElement("ul");
      ul.style.width = "300px";

      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
          const li = document.createElement("li");
          li.setAttribute("data-pos", `[${i},${j}]`);
         
          ul.appendChild(li);

        }
      }
      return ul;

  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;