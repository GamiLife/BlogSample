import { ReactiveControllerHost } from 'lit';
import {
  buildNodeValue,
  getCellValue,
  removeTailAddingNewValuesToHead,
  resizeAddingNewValueToNewHead,
} from '../utils';
import { TDirections, TSnakePosition } from '../components/grid/grid';
import { LinkedList } from '../utils/LinkedList';

export class SnakeController {
  host: ReactiveControllerHost;
  sizeX: number;

  private _snake: LinkedList<TSnakePosition> = new LinkedList<TSnakePosition>();
  private _snakePositionValues: Set<Number> = new Set<Number>([]);

  constructor(host: ReactiveControllerHost, sizeX: number) {
    this.host = host;
    this.sizeX = sizeX;
  }

  private moveSnakeToThisPositionValue(
    snakePositions: TSnakePosition,
    directions: TDirections
  ) {
    const { row, col } = snakePositions;
    const positionValue = getCellValue(row, col, this.sizeX);

    const isCollition = this.isCollitionWithItself(positionValue);
    if (isCollition) {
      throw new Error('Collition itself snake');
    }

    const snakeArr = [...this.snakePositionValues];
    this._snakePositionValues = removeTailAddingNewValuesToHead(
      snakeArr,
      positionValue,
      directions,
      this.snake.currentDirection
    );
    this._snake.moveAddingNewValuesToTail(snakePositions, directions);

    this.host.requestUpdate();
  }

  private resizeSnakeAddingThisPositionValueToHead(
    snakePositions: TSnakePosition,
    directions: TDirections | null
  ) {
    const { row, col } = snakePositions;
    const positionValue = getCellValue(row, col, this.sizeX);

    const isCollition = this.isCollitionWithItself(positionValue);
    if (isCollition) {
      throw new Error('Collition itself snake');
    }

    const snakeArr = [...this.snakePositionValues];
    this._snakePositionValues = resizeAddingNewValueToNewHead(
      snakeArr,
      positionValue,
      directions,
      this.snake.currentDirection
    );
    this._snake.resizeAddingNewValueToNewHead(snakePositions, directions);

    this.host.requestUpdate();
  }

  moveByAxis(row: number, col: number, directions: TDirections) {
    const nodeValue = buildNodeValue(row, col);
    this.moveSnakeToThisPositionValue(nodeValue, directions);
  }

  resizeByAxis(row: number, col: number, directions: TDirections | null) {
    const nodeValue = buildNodeValue(row, col);
    this.resizeSnakeAddingThisPositionValueToHead(nodeValue, directions);
  }

  initializeSnake(i: number, j: number) {
    const isEmptySnake = !this.snake.length;
    if (!isEmptySnake) return false;

    this.resizeByAxis(i, j, null);
    return true;
  }

  isCollitionWithItself(currentCellValue: Number) {
    return this.snakePositionValues.has(currentCellValue);
  }

  get snake() {
    return this._snake;
  }

  get snakePositionValues() {
    return this._snakePositionValues;
  }
}
