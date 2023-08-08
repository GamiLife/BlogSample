class Board extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
  }

  updatePlayer(currentPlayer) {
    const playerNumber = this.shadowRoot.querySelector(
      '.board__player__number'
    );
    const playerMedia = this.shadowRoot.querySelector('.player_img');
    const media = store.currentMedia(currentPlayer);

    playerMedia.setAttribute('src', media);
    playerNumber.textContent = currentPlayer;
  }

  updateEndGame(text) {
    const playerResult = this.shadowRoot.querySelector('.player_result');

    playerResult.textContent = text;
  }

  isVictory({ currentPlayer, row, col }) {
    const player = currentPlayer === 'X' ? 1 : 2;
    const mat = store.matrix;
    const iteratorOf3 = Array.from(Array(3).keys());

    const wonInCol = iteratorOf3
      .map((i) => mat[i][col])
      .every((item) => item === currentPlayer);

    if (wonInCol) {
      this.updateEndGame(`Player ${player} Won!`);
      return;
    }

    const wonInRow = iteratorOf3
      .map((i) => mat[row][i])
      .every((item) => item === currentPlayer);

    if (wonInRow) {
      this.updateEndGame(`Player ${player} Won!`);
      return;
    }

    const isOnAnyDiagonal =
      row == col || row === 0 || row === 2 || col === 0 || col === 2;
    if (!isOnAnyDiagonal) {
      store.turnNumber >= 8 && this.updateEndGame(`Any Player Won`);
      return;
    }

    const isTransverse = row !== col;
    const matMod = isTransverse
      ? store.matrix.map((row) => row.slice().reverse())
      : store.matrix;

    const wonInDiagonal = iteratorOf3
      .map((i) => matMod[i][i])
      .every((item) => item === currentPlayer);

    if (wonInDiagonal) {
      this.updateEndGame(`Player ${player} Won!`);
      return;
    }

    store.turnNumber >= 8 && this.updateEndGame(`Any Player Won`);
  }

  handlerStoreChanges(event) {
    const { type, detail } = event;
    if (type !== 'store:change') return;

    if (detail.key === 'currentPlayer') {
      this.updatePlayer(detail.value);
      return;
    }

    if (detail.key === 'matrix') {
      this.isVictory(detail.value);
      return;
    }
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>${stylesBoard}</style>

        <div class="board__wrapper">    
            <div class="board__player">
              <div>
                <p>Player: <span class="board__player__number">1</span></p>
                <img class="player_img" width="50" src="https://freetictactoe.com/images/mark-x.png" />
              </div>
              <div>
                <p class="player_result"></p>
              </div>
            </div>

            <div class="board">
                <slot name="board-children"></slot>
            </div>
        </div>
    `;

    document.addEventListener(
      'store:change',
      this.handlerStoreChanges.bind(this)
    );
  }
}

window.customElements.define('board-wc', Board);
