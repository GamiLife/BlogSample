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

  private getValuesByDirection(
    tailValues: TSnakePosition,
    direction: TDirections
  ) {
    const { col, row } = tailValues;
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

  getNewHeadSnakePosition(direction: TDirections) {
    const head = this.store.snake.head?.value;

    if (!head) {
      return null;
    }
    const newHeadPosition = this.getValuesByDirection(head, direction);
    return newHeadPosition;
  }

  hostConnected(): void {}
  hostDisconnected(): void {}
}
