import { TDirections, TSnakePosition } from '../components/grid/grid';

export const isOdd = (digit: number) => digit % 2 === 0;

export const isEven = (digit: number) => digit % 2 !== 0;

export const emptyMap = (size: number) => Array(size).fill('');

export const getCellValue = (row: number, col: number, sizeX: number) =>
  sizeX * row + col;

export const resizeAddingNewValueToNewHead = (
  snakeArr: Number[],
  positionValue: number,
  directionType: TDirections | null
) => {
  if (directionType && ['right', 'down'].includes(directionType)) {
    return new Set([...snakeArr, positionValue]);
  }
  return new Set([positionValue, ...snakeArr]);
};

/**
 * Order of items are important because I'm using slice method
 * so the order related with the head and the tail of snake
 * @param snakeArr
 * @param positionValue
 * @param directionType
 * @returns
 */
export const removeTailAddingNewValuesToHead = (
  snakeArr: Number[],
  positionValue: number,
  directionType: TDirections
) => {
  if (['right', 'down'].includes(directionType)) {
    return new Set([...snakeArr.slice(1), positionValue]);
  }
  return new Set([positionValue, ...snakeArr.slice(0, -1)]);
};

export const validKeyboardCodes = [
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight',
] as const;
export type TKeyboardEvents = (typeof validKeyboardCodes)[number];
export const manageKeyEvent: Record<TKeyboardEvents, TDirections> = {
  ArrowDown: 'down',
  ArrowUp: 'up',
  ArrowLeft: 'left',
  ArrowRight: 'right',
};

export const getByPosition = (col: number, row: number) => ({
  down: {
    col,
    row: row + 1,
  },
  up: {
    col,
    row: row - 1,
  },
  left: {
    col: col - 1,
    row,
  },
  right: {
    col: col + 1,
    row,
  },
});

export const buildNodeValue = (i: number, j: number): TSnakePosition => {
  return {
    col: j,
    row: i,
  };
};

export interface IValidInterval {
  value: number;
  min: number;
  max: number;
}
export const validInterval = ({ value, min, max }: IValidInterval) => {
  const correctInterval = Math.min(Math.max(value, min), max);
  return correctInterval;
};

export interface IGetFoodPositionValue {
  snakePositionValues: Set<Number>;
  positionValues: number[];
}
export const getFoodPositionValue = ({
  snakePositionValues,
  positionValues,
}: IGetFoodPositionValue) => {
  const availablePositionValues = positionValues.filter(
    (value) => ![...snakePositionValues].includes(value)
  );

  const index = Math.floor(Math.random() * availablePositionValues.length);
  return availablePositionValues?.[index] ?? availablePositionValues[0];
};

export const haveBeenEatenFood = (
  row: number,
  col: number,
  sizeX: number,
  foodPositionValue?: number
) => {
  if (foodPositionValue === undefined) return false;
  const nodeValue = getCellValue(row, col, sizeX);
  return foodPositionValue === nodeValue;
};
