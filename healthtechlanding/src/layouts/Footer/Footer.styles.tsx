import classNames from 'classnames';

const FooterCSS = classNames('bg-zinc-700', 'text-white');

const FooterContainerCSS = classNames(
  'flex',
  'flex-wrap',
  'gap-10',
  'justify-between',
  'p-10',
  'md:p-20',
  'mx-auto',
  'ax-w-screen-xl'
);

const InformationCSS = classNames('flex', 'flex-wrap', 'gap-10', 'md:gap-20');

const InformationListCSS = classNames('flex', 'flex-col', 'gap-3');

const SocialCSS = classNames('flex', 'flex-col', 'gap-5');

const SocialListCSS = classNames('flex', 'flex-col', 'gap-3');

const styles = {
  FooterCSS,
  FooterContainerCSS,
  InformationCSS,
  InformationListCSS,
  SocialCSS,
  SocialListCSS,
};

export default styles;
