import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cellStyles } from './style';

export const cellTheme = {
  squareLight: 'light',
  squareDark: 'dark',
  squareSnake: 'snake',
  squareFood: 'food',
};

export type TCellTheme = keyof typeof cellTheme;

/**
 * An example element.
 *
 * @csspart button - The button
 */
@customElement('cell-element')
export class Cell extends LitElement {
  @property({ type: Number })
  value?: number;
  @property({ type: String })
  theme: TCellTheme = 'squareLight';
  @property({ type: Function })
  onClick: () => void = () => {};

  private getTheme(theme: TCellTheme) {
    return cellTheme?.[theme] ?? cellTheme.squareLight;
  }

  render() {
    const themeValue = this.getTheme(this.theme);
    const cellChildren = `cell-children ${themeValue}`;

    return html`
      <div class=${cellChildren} @click=${this.onClick}>${this.value}</div>
    `;
  }

  static styles = cellStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    'cell-element': Cell;
  }
}
