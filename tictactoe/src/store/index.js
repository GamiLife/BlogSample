(function () {
  window.store = {
    media: {
      1: 'https://freetictactoe.com/images/mark-x.png',
      2: 'https://freetictactoe.com/images/mark-o.png',
    },
    currentPlayer: 1,
    matrix: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    currentMedia: (currentPlayerProp) => {
      return store.media[currentPlayerProp ?? store.currentPlayer];
    },
    afterChange: ({ key, value }) => {
      const messageEvent = new CustomEvent('store:change', {
        detail: {
          key,
          value,
        },
        bubbles: true,
        composed: true,
      });
      document.dispatchEvent(messageEvent);
    },
    updateMatrix: (row, col) => {
      try {
        const currentPlayer = store.currentPlayer === 1 ? 'X' : 'O';
        store.matrix[row][col] = currentPlayer;
        store.afterChange({
          key: 'matrix',
          value: currentPlayer,
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    togglePlayer: () => {
      const updatedCurrentPlayer = store.currentPlayer === 1 ? 2 : 1;
      store.currentPlayer = updatedCurrentPlayer;
      store.afterChange({ key: 'currentPlayer', value: updatedCurrentPlayer });
    },
  };
})();
