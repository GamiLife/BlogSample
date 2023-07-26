import classNames from 'classnames';

const HeaderCSS = classNames('sticky', 'top-0', 'bg-white', 'z-10');

const NavCSS = classNames(
  'border-gray-200',
  'px-4',
  'py-2.5',
  'lg:px-6',
  'bg-white'
);

const NavContainerCSS = classNames(
  'flex',
  'flex-wrap',
  'gap-3',
  'justify-between',
  'items-center',
  'mx-auto',
  'max-w-screen-xl'
);

const NavLogoCSS = classNames('flex', 'items-center');

const NavListCSS = classNames(
  'flex',
  'justify-between',
  'items-center',
  'gap-x-8'
);

const NavItemsCSS = classNames(
  'decoration-indigo-500',
  'underline-offset-[5px]',
  'decoration-2'
);

const NavButtonDesktopCSS = classNames('hidden', 'md:block');

const NavButtonMobileCSS = classNames('block', 'md:hidden');

const StartButtonTodayCSS = classNames('shadow-md');

const StartButtonTodaySpanCSS = classNames('flex', 'items-center', 'gap-2');

const styles = {
  HeaderCSS,
  NavCSS,
  NavContainerCSS,
  NavLogoCSS,
  NavListCSS,
  NavItemsCSS,
  NavButtonDesktopCSS,
  NavButtonMobileCSS,
  StartButtonTodayCSS,
  StartButtonTodaySpanCSS,
};

export default styles;
