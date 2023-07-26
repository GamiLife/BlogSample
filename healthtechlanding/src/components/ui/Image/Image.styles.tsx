import classNames from 'classnames';

const FigureCSS = classNames('max-w-lg', 'flex', 'rounded-[0.8rem]');

const NextImageCSS = classNames('h-auto', 'max-w-full');

const FigCaptionCSS = classNames(
  'mt-2',
  'text-sm',
  'text-center',
  'text-gray-500'
);

const styles = { FigureCSS, NextImageCSS, FigCaptionCSS };

export default styles;
