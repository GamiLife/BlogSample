import { css } from 'lit';

export const gridStyles = css`
  :host {
    width: 90%;
  }

  .grid {
    display: grid;
    grid-gap: 3px;
    width: inherit;
    height: inherit;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const gridChildrenStyles = (sizeX: number, sizeY: number) => ({
  gridTemplate: `repeat(${sizeX},1fr) / repeat(${sizeY},1fr)`,
});
