import { TDirections, TSnakePosition } from '../components/grid/grid';

export const isOdd = (digit: number) => digit % 2 === 0;

export const isEven = (digit: number) => digit % 2 !== 0;

export const emptyMap = (size: number) => Array(size).fill('');

export const getCellValue = (row: number, col: number, sizeX: number) =>
  sizeX * row + col;

export const sortItemsOfSnake = (
  snakeArr: Number[],
  positionValue: number,
  directionType: TDirections,
  currentSnakeDirection: TDirections | null,
  isAddingNewItemToSnake: boolean
) => {
  const isOpositeDirection = isOposite(currentSnakeDirection, directionType);
  const isAppliedVariations = isAppliedSpecialVariations(
    currentSnakeDirection,
    directionType
  );

  if (
    currentSnakeDirection !== directionType &&
    !isOpositeDirection &&
    !isAppliedVariations
  ) {
    if (['down', 'right'].includes(directionType)) {
      return new Set([
        ...snakeArr.slice(...(isAddingNewItemToSnake ? [] : [0, -1])).reverse(),
        positionValue,
      ]);
    }
    return new Set([
      positionValue,
      ...snakeArr.slice(...(isAddingNewItemToSnake ? [] : [1])).reverse(),
    ]);
  }

  if (['down', 'right'].includes(directionType)) {
    return new Set([
      ...snakeArr.slice(...(isAddingNewItemToSnake ? [] : [1])),
      positionValue,
    ]);
  }

  return new Set([
    positionValue,
    ...snakeArr.slice(...(isAddingNewItemToSnake ? [] : [0, -1])),
  ]);
};

export const resizeAddingNewValueToNewHead = (
  snakeArr: Number[],
  positionValue: number,
  directionType: TDirections | null,
  currentSnakeDirection: TDirections | null
) => {
  return sortItemsOfSnake(
    snakeArr,
    positionValue,
    directionType ?? 'down',
    currentSnakeDirection,
    true
  );
};

export const isAppliedSpecialVariations = (
  currentSnakeDirection: TDirections | null,
  directionType: TDirections
) =>
  [
    currentSnakeDirection === 'right' && directionType === 'down',
    currentSnakeDirection === 'down' && directionType === 'right',
    currentSnakeDirection === 'left' && directionType === 'up',
    currentSnakeDirection === 'up' && directionType === 'left',
  ].some((validation) => validation === true);

/**
 * Order of items are important because I'm using slice method
 * so the order is related with the head and the tail of snake
 * @param snakeArr
 * @param positionValue
 * @param directionType
 * @returns
 */
export const removeTailAddingNewValuesToHead = (
  snakeArr: Number[],
  positionValue: number,
  directionType: TDirections,
  currentSnakeDirection: TDirections | null
) => {
  return sortItemsOfSnake(
    snakeArr,
    positionValue,
    directionType,
    currentSnakeDirection,
    false
  );
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

export const isOposite = (
  currentDirection: TDirections | null,
  newDirection: TDirections | null
) => {
  if (currentDirection === 'down' && newDirection === 'up') {
    return true;
  }
  if (currentDirection === 'up' && newDirection === 'down') {
    return true;
  }
  if (currentDirection === 'right' && newDirection === 'left') {
    return true;
  }
  if (currentDirection === 'left' && newDirection === 'right') {
    return true;
  }
  return false;
};

export const getByPosition = (
  col: number,
  row: number,
  currentDirection: TDirections | null,
  newDirection: TDirections
) => {
  const validation = {
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
  };

  return validation;
};

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
