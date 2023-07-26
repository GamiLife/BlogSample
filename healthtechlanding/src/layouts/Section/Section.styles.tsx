import classNames from 'classnames';

const SectionInformationCSS = classNames('container');

const SectionVisualExampleCSS = classNames(
  'container',
  'flex',
  'justify-center',
  'items-center'
);

const SectionCSS = classNames(
  'flex',
  'flex-col',
  'justify-between',
  'gap-5',
  'md:flex-row'
);

const styles = { SectionInformationCSS, SectionVisualExampleCSS, SectionCSS };

export default styles;
