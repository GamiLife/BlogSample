import { ReactiveController, ReactiveControllerHost } from 'lit';
import { getByPosition, isOposite, validInterval } from '../utils';
import { TDirections, TSnakePosition } from '../components/grid/grid';
import { LinkedList } from '../utils/LinkedList';

export interface IStore {
  sizeX: number;
  sizeY: number;
  snake: LinkedList<TSnakePosition>;
  snakePositionValues: Set<Number>;
}

export class CellController implements ReactiveController {
  host: ReactiveControllerHost;
  store: IStore;

  constructor(host: ReactiveControllerHost, store: IStore) {
    (this.host = host).addController(this);
    this.store = store;
  }

  private getValidAxis(col: number, row: number, throwError = true) {
    if (throwError && (col < 0 || col >= this.store.sizeX)) {
      throw new Error('Invalid range');
    }

    if (throwError && (row < 0 || col >= this.store.sizeY)) {
      throw new Error('Invalid range');
    }

    const validCol = validInterval({
      value: col,
      min: 0,
      max: this.store.sizeX - 1,
    });

    const validRow = validInterval({
      value: row,
      min: 0,
      max: this.store.sizeY - 1,
    });

    return {
      validCol,
      validRow,
    };
  }

  private getValuesByDirection(values: TSnakePosition, direction: TDirections) {
    const { col, row } = values;
    const { col: colByPosition, row: rowByPosition } = getByPosition(
      col,
      row,
      this.store.snake.currentDirection,
      direction
    )[direction];

    const { validCol, validRow } = this.getValidAxis(
      colByPosition,
      rowByPosition
    );
    const newValue: TSnakePosition = {
      col: validCol,
      row: validRow,
    };
    return newValue;
  }

  private getSnakeValues(direction: TDirections) {
    const isOpositeDirection = isOposite(
      this.store.snake.currentDirection,
      direction
    );
    if (isOpositeDirection) {
      return this.store.snake.head?.value;
    }

    return this.store.snake.tail?.value;
  }

  getNewTailSnakePosition(direction: TDirections) {
    let values = this.getSnakeValues(direction);

    if (!values) {
      return null;
    }
    const newTailPosition = this.getValuesByDirection(values, direction);

    return newTailPosition;
  }

  hostConnected(): void {}
  hostDisconnected(): void {}
}
