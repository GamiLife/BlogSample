import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { RightIcon } from '../../components/ui/Icons';
import { Image } from '../../components/ui/Image';
import classNames from 'classnames';

export const Header = () => {
  const [linkSelected, setLinkSelected] = useState('');

  const handleLink = (anchor: string) => setLinkSelected(anchor);

  return (
    <header className="sticky top-0 bg-white z-10">
      <nav className="border-gray-200 px-4 py-2.5 lg:px-6 bg-white dark:bg-gray-800">
        <div className="flex flex-wrap gap-3 justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Brand Logo"
              width={100}
              height={40}
              hasShadow={false}
            />
          </a>

          <div className="flex justify-between items-center gap-x-8">
            <ul className="flex justify-between items-center gap-x-8">
              <li className="">
                <a
                  href="#para-ti"
                  onClick={handleLink.bind(this, 'forYou')}
                  className={classNames(
                    'decoration-indigo-500',
                    'underline-offset-[5px]',
                    'decoration-2',
                    {
                      underline: linkSelected === 'forYou',
                    }
                  )}
                >
                  Para ti
                </a>
              </li>
              <li className="">
                <a
                  href="#acerca-de"
                  onClick={handleLink.bind(this, 'aboutUs')}
                  className={classNames(
                    'decoration-indigo-500',
                    'underline-offset-[5px]',
                    'decoration-2',
                    {
                      underline: linkSelected === 'aboutUs',
                    }
                  )}
                >
                  Acerca de
                </a>
              </li>
            </ul>

            <div className="hidden md:block">
              <Button className="shadow-md">
                <span className="flex items-center gap-2">
                  Comenzar hoy
                  <span>
                    <RightIcon />
                  </span>
                </span>
              </Button>
            </div>
          </div>

          <div className="block md:hidden">
            <Button className="shadow-md">
              <span className="flex items-center gap-2">
                Comenzar hoy
                <span>
                  <RightIcon />
                </span>
              </span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
