import { Directive, directive } from 'lit/directive.js';

export class ScoreDirective extends Directive {
  render(snakePositionValues: Set<Number>) {
    const size = snakePositionValues.size;
    return `Score: ${size * 10}`;
  }
}

export const scoreDirective = directive(ScoreDirective);
