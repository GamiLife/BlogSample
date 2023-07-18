import { ReactiveController, ReactiveControllerHost } from 'lit';
import { getByPosition, validInterval } from '../utils';
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

  private getValidAxis(col: number, row: number) {
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
    const { col: colByPosition, row: rowByPosition } = getByPosition(col, row)[
      direction
    ];

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

  //TODO: Valid correctly getting the snake values either head or tail
  private getSnakeValues(direction: TDirections) {
    return this.store.snake.currentDirection === direction
      ? this.store.snake.tail?.value
      : this.store.snake.head?.value;
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
