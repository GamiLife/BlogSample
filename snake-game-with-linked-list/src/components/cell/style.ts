import { css } from 'lit';

export const cellStyles = css`
  :host {
    width: auto;
    height: 45px;
  }

  .cell-children {
    width: inherit;
    height: inherit;

    &.dark {
      background-color: #c4d7b2;
    }

    &.light {
      background-color: #e1ecc8;
    }

    &.snake {
      background-color: #f24c3d;
    }
  }
`;
