import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { gridChildrenStyles, gridStyles } from './style';

import { styleMap } from 'lit/directives/style-map.js';

import '../cell/cell';
import {
  TKeyboardEvents,
  emptyMap,
  getCellValue,
  getFoodPositionValue,
  haveBeenEatenFood,
  manageKeyEvent,
  validKeyboardCodes,
} from '../../utils';
import { CellController, SnakeController } from '../../controllers';
import { scoreDirective, themeCell } from '../../directives';

export type TSnakePosition = {
  col: number;
  row: number;
};

export type TDirections = 'up' | 'down' | 'left' | 'right';

@customElement('grid-element')
export class Grid extends LitElement {
  @property({ type: Number })
  sizeX: number = 0;
  @property({ type: Number })
  sizeY: number = 0;

  intervalId?: number;

  score: number = 0;
  @state()
  gameOver: boolean = false;
  @state()
  foodPositionValue?: number;
  @state()
  positionValues: number[] = [];

  get sharedStore() {
    return {
      snake: this.snakeController.snake,
      snakePositionValues: this.snakeController.snakePositionValues,
      sizeX: this.sizeX,
      sizeY: this.sizeY,
    };
  }

  private snakeController = new SnakeController(this, this.sizeX);
  private cellController = new CellController(this, this.sharedStore);

  private move(direction: TDirections) {
    try {
      const newPosition =
        this.cellController.getNewTailSnakePosition(direction);
      if (!newPosition) return;

      const eatFood = haveBeenEatenFood(
        newPosition.row,
        newPosition.col,
        this.sizeX,
        this.foodPositionValue
      );
      if (eatFood) {
        this.generateFood();
        this.snakeController.resizeByAxis(
          newPosition.row,
          newPosition.col,
          direction
        );
        return;
      }
      this.snakeController.moveByAxis(
        newPosition.row,
        newPosition.col,
        direction
      );
    } catch (error) {
      this.gameOver = true;
    }
  }

  private handlerKeys(e: KeyboardEvent) {
    if (this.gameOver) {
      return;
    }

    const code = e.code;
    if (validKeyboardCodes.some((item) => code === item)) {
      const direction = manageKeyEvent[code as TKeyboardEvents];

      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => this.autoSnakeMovement(), 200);
      }

      this.move(direction);
    }
  }

  private generateFood() {
    const foodGeneratedToDisplay = getFoodPositionValue({
      snakePositionValues: this.snakeController.snakePositionValues,
      positionValues: this.positionValues,
    });
    this.foodPositionValue = foodGeneratedToDisplay;
  }

  private handlerInitSnake(i: number, j: number) {
    const isInitial = this.snakeController.initializeSnake(i, j);
    if (!isInitial) return;

    this.generateFood();
  }

  autoSnakeMovement() {
    if (this.gameOver) return;
    if (!this.snakeController.snake.currentDirection) {
      return;
    }
    this.move(this.snakeController.snake.currentDirection);
  }

  //TODO: Improve with any observer pattern or susbscription only for values that we wanna update not every change updated
  updated() {
    this.cellController.store = this.sharedStore;
    this.snakeController.sizeX = this.sizeX;

    if (this.intervalId === undefined) {
      this.intervalId = setInterval(() => this.autoSnakeMovement(), 200);
    }
    if (this.gameOver && this.intervalId != undefined) {
      clearInterval(this.intervalId);
    }

    if (this.positionValues.length) return;
    this.positionValues = emptyMap(this.sizeY * this.sizeX - 1).map(
      (_, i) => i
    );
  }

  constructor() {
    super();
    this.getRootNode().addEventListener('keydown', (e) =>
      this.handlerKeys(e as KeyboardEvent)
    );
  }

  render() {
    return html`
      <div>
        <div class="score">
          ${scoreDirective(this.snakeController.snakePositionValues)}
        </div>
        <div
          style=${styleMap(gridChildrenStyles(this.sizeX, this.sizeY))}
          class="grid"
        >
          ${emptyMap(this.sizeY).map((_, i) =>
            emptyMap(this.sizeX).map(
              (_, j) =>
                html`
                  <cell-element
                    theme=${themeCell(
                      i,
                      j,
                      this.snakeController.snakePositionValues,
                      this.sizeX,
                      this.foodPositionValue
                    )}
                    value=${getCellValue(i, j, this.sizeX)}
                    .onClick=${this.handlerInitSnake.bind(this, i, j)}
                  ></cell-element>
                `
            )
          )}
        </div>
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
