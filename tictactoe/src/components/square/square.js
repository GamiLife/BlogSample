class Square extends HTMLElement {
  row;
  col;
  selected = false;

  static get observedAttributes() {
    return ['row', 'col'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'row') {
      this.row = Number(newValue);
    }
    if (name === 'col') {
      this.col = Number(newValue);
    }
  }

  handlerSquare() {
    this.selected = true;
    const square = this.shadowRoot.querySelector('.square');

    const img = document.createElement('img');
    img.setAttribute('src', store.currentMedia());
    img.setAttribute('width', '50');
    img.setAttribute('height', '50');
    square.appendChild(img);

    store.updateMatrix(this.row, this.col);
    store.togglePlayer();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>${stylesSquare}</style>

        <div class="square"></div>
    `;

    this.addEventListener('click', (e) => {
      if (this.selected) return;
      this.handlerSquare();
    });
  }
}

window.customElements.define('square-wc', Square);
