import { useMemo } from 'react';
import { validClassName } from '../../../helpers';

type TVariations = '1' | '2' | '3' | '4' | '5' | '6';
type TUnderlineVariations = '1' | '2' | '4' | '8';

export interface IText {
  text: string;
  level: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  underline?: `offset-${TUnderlineVariations}`;
  as: `h${TVariations}` | 'p';
}

export const Text: React.FC<IText> = ({
  text,
  level,
  as,
  underline,
  fontWeight = 'medium',
}) => {
  const Component = as;
  const className = useMemo(
    () =>
      `text-${level} font-${fontWeight} ${validClassName(
        `underline underline-${underline}`
      )}`,
    [level, fontWeight, underline]
  );

  return <Component className={className}>{text}</Component>;
};
