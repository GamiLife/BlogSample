import { css } from 'lit';

export const cellStyles = css`
  :host {
    width: auto;
    height: 45px;
  }

  .cell-children {
    width: inherit;
    height: inherit;

    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    &.dark {
      background-color: #c4d7b2;
    }

    &.light {
      background-color: #e1ecc8;
    }

    &.snake {
      background-color: #f24c3d;
    }

    &.food {
      background-color: #a076f9;
    }
  }
`;
