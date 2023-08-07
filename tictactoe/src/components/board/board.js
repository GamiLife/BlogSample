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

  isVictory(lastMovePlayer) {
    const mat = store.matrix;

    console.log('test', lastMovePlayer, mat);
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
                <p>Player: <strong class="board__player__number">1</strong></p>
                <img class="player_img" width="50" src="https://freetictactoe.com/images/mark-x.png" />
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
