import classNames from 'classnames';

const PillCSS = classNames(
  'flex',
  'flex-between',
  'px-2',
  'py-1',
  'md:p-0',
  'rounded-full',
  'bg-neutralPrimary',
  'md:bg-transparent',
  'gap-1',
  'md:gap-2',
  'text-sm'
);

const ServicePillCSS = classNames(
  'flex',
  'flex-between',
  'flex-wrap',
  'md:bg-neutralPrimary',
  'md:rounded-full',
  'gap-5',
  'md:gap-10',
  'py-3',
  'md:px-8',
  'max-w-fit',
  'text-slate-500'
);

const styles = { ServicePillCSS, PillCSS };

export default styles;
