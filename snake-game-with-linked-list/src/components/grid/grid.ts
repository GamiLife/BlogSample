import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TCellTheme } from '../cell/cell';
import { gridChildrenStyles, gridStyles } from './style';

import { styleMap } from 'lit/directives/style-map.js';

import '../cell/cell';
import { emptyMap, isEven, isOdd } from '../../utils';
import { LinkedList } from '../../utils/LinkedList';

@customElement('grid-element')
export class Grid extends LitElement {
  @property({ type: Number })
  sizeX: number = 0;

  @property({ type: Number })
  sizeY: number = 0;

  @property({ type: LinkedList })
  snake: LinkedList = new LinkedList();

  private getThemeByCell(row: number, column: number): TCellTheme {
    const isOddRow = isOdd(row);
    const isOddColumn = isOddRow ? isOdd(column) : isEven(column);
    return isOddColumn ? 'squareLight' : 'squareDark';
  }

  private buildNodeValue(i: number, j: number) {
    return {
      col: j,
      row: i,
    };
  }

  private initializeSnake(i: number, j: number) {
    const isEmptySnake = !this.snake.length;

    if (!isEmptySnake) return;

    const nodeValue = this.buildNodeValue(i, j);
    this.snake.push(nodeValue);
  }

  render() {
    return html`
      <div
        style=${styleMap(gridChildrenStyles(this.sizeX, this.sizeY))}
        class="grid"
      >
        ${emptyMap(this.sizeY).map((_, i) =>
          emptyMap(this.sizeX).map(
            (_, j) =>
              html`
                <cell-element
                  theme=${this.getThemeByCell(i, j)}
                  .onClick=${() => this.initializeSnake(i, j)}
                ></cell-element>
              `
          )
        )}
      </div>
    `;
  }

  static styles = gridStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-element': Grid;
  }
}
