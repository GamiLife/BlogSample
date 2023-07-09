import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TCellTheme } from '../cell/cell';
import { gridChildrenStyles, gridStyles } from './style';

import { styleMap } from 'lit/directives/style-map.js';

import '../cell/cell';
import { emptyMap, isEven, isOdd } from '../../utils';

@customElement('grid-element')
export class Grid extends LitElement {
  @property({ type: Number })
  sizeX: number = 0;

  @property({ type: Number })
  sizeY: number = 0;

  private getThemeByCell(row: number, column: number): TCellTheme {
    const isOddRow = isOdd(row);
    const isOddColumn = isOddRow ? isOdd(column) : isEven(column);
    return isOddColumn ? 'squareLight' : 'squareDark';
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
                <cell-element theme=${this.getThemeByCell(i, j)}></cell-element>
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
