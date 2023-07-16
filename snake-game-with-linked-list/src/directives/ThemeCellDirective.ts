import { Directive, directive } from 'lit/directive.js';
import { isOdd, isEven, getCellValue } from '../utils';

export class ThemeCellDirective extends Directive {
  render(
    row: number,
    column: number,
    snakePositionValues: Set<Number>,
    sizeX: number,
    foodPositionValue: number | undefined
  ) {
    const value = getCellValue(row, column, sizeX);

    const isIncludedInSnakePosiionValue = [...snakePositionValues].includes(
      value
    );

    if (isIncludedInSnakePosiionValue) {
      return 'squareSnake';
    }

    const isIncludedInFoodPositionValue = foodPositionValue
      ? foodPositionValue === value
      : false;

    if (isIncludedInFoodPositionValue) {
      return 'squareFood';
    }

    const isOddRow = isOdd(row);
    const isOddColumn = isOddRow ? isOdd(column) : isEven(column);
    return isOddColumn ? 'squareLight' : 'squareDark';
  }
}

export const themeCell = directive(ThemeCellDirective);
