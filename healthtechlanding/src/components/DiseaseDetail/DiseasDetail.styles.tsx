import classNames from 'classnames';

const diseaseDetailCSS = classNames(
  'flex',
  'flex-wrap',
  'sm:flex-nowrap',
  'gap-3'
);

const diseaseFrontPageCSS = classNames(
  'rounded-lg',
  'relative',
  'w-full',
  'min-w-max',
  'sm:w-fit'
);

const frontPageTextCSS = classNames(
  'py-5',
  'px-5',
  'sm:absolute',
  'top-0 z-[3]',
  'rounded-lg',
  'bg-[#EFFFDA]',
  'w-full',
  'shadow-lg'
);

const frontPageImageCSS = classNames('hidden', 'sm:block');

const detailCSS = classNames('bg-[#EFFFDA]', 'rounded-lg', 'shadow-lg');

const detailListCSS = classNames('flex', 'flex-col', 'gap-5', 'p-5');

const detailListItemCSS = classNames('flex', 'gap-3');

const detailPointCSS = classNames(
  'flex',
  'rounded-full',
  'bg-primary',
  'my-2',
  'w-[10px]',
  'h-[10px]'
);

const styles = {
  diseaseDetailCSS,
  diseaseFrontPageCSS,
  frontPageTextCSS,
  frontPageImageCSS,
  detailCSS,
  detailListCSS,
  detailListItemCSS,
  detailPointCSS,
};
export default styles;
