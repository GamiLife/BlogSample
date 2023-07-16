import { ReactiveControllerHost } from 'lit';
import {
  buildNodeValue,
  getCellValue,
  removeTailAddingNewValuesToHead,
} from '../utils';
import { TSnakePosition } from '../components/grid/grid';
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

  private moveHeadSnakeToThisPositionValue(snakePositions: TSnakePosition) {
    const { row, col } = snakePositions;
    const positionValue = getCellValue(row, col, this.sizeX);

    const snakeArr = [...this.snakePositionValues];
    this._snakePositionValues = removeTailAddingNewValuesToHead(
      snakeArr,
      positionValue
    );
    this._snake.removeTailAddingNewValuesToHead(snakePositions);

    this.host.requestUpdate();
  }

  private resizeSnakeAddingThisPositionValueToHead(
    snakePositions: TSnakePosition
  ) {
    const { row, col } = snakePositions;
    const positionValue = getCellValue(row, col, this.sizeX);

    const snakeArr = [...this.snakePositionValues];
    this._snakePositionValues = new Set([...snakeArr, positionValue]);
    this._snake.addNewValueToNewHead(snakePositions);

    this.host.requestUpdate();
  }

  moveByAxis(row: number, col: number) {
    const nodeValue = buildNodeValue(row, col);
    this.moveHeadSnakeToThisPositionValue(nodeValue);
  }

  resizeByAxis(row: number, col: number) {
    const nodeValue = buildNodeValue(row, col);
    this.resizeSnakeAddingThisPositionValueToHead(nodeValue);
  }

  initializeSnake(i: number, j: number) {
    const isEmptySnake = !this.snake.length;
    if (!isEmptySnake) return false;

    this.resizeByAxis(i, j);
    return true;
  }

  get snake() {
    return this._snake;
  }

  get snakePositionValues() {
    return this._snakePositionValues;
  }
}
