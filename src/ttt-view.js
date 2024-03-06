
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
          // li.setAttribute("data-pos", `[${i},${j}]`); //[0,1]
          li.dataset.pos = JSON.stringify([i,j]);
          ul.appendChild(li);

        }
      }
      return ul;

  }
  
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    let square = e.target // the li that i clicked on
    this.makeMove(square);
  }

  makeMove(square) {
    const player = this.game.currentPlayer
    this.game.playMove(JSON.parse(square.dataset.pos));
    
  }
  
  handleGameOver() {
  }
}

export default View;