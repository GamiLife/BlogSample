import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { RightIcon } from '../../components/ui/Icons';
import { Image } from '../../components/ui/Image';
import classNames from 'classnames';

import styles from './Header.styles';

const StartTodayButton = () => (
  <Button className={styles.StartButtonTodayCSS}>
    <span className={styles.StartButtonTodaySpanCSS}>
      Comenzar hoy
      <span>
        <RightIcon />
      </span>
    </span>
  </Button>
);

export const Header = () => {
  const [linkSelected, setLinkSelected] = useState('');

  const handleLink = (anchor: string) => setLinkSelected(anchor);

  return (
    <header className={styles.HeaderCSS}>
      <nav className={styles.NavCSS}>
        <div className={styles.NavContainerCSS}>
          <a href="#" className={styles.NavLogoCSS}>
            <Image
              src="/assets/logo.png"
              alt="Brand Logo"
              width={100}
              height={40}
              hasShadow={false}
            />
          </a>

          <div className={styles.NavListCSS}>
            <ul className={styles.NavListCSS}>
              <li>
                <a
                  href="#para-ti"
                  onClick={handleLink.bind(this, 'forYou')}
                  className={classNames(styles.NavItemsCSS, {
                    underline: linkSelected === 'forYou',
                  })}
                >
                  Para ti
                </a>
              </li>
              <li>
                <a
                  href="#acerca-de"
                  onClick={handleLink.bind(this, 'aboutUs')}
                  className={classNames(styles.NavItemsCSS, {
                    underline: linkSelected === 'aboutUs',
                  })}
                >
                  Acerca de
                </a>
              </li>
            </ul>

            <div className={styles.NavButtonDesktopCSS}>
              <StartTodayButton />
            </div>
          </div>

          <div className={styles.NavButtonMobileCSS}>
            <StartTodayButton />
          </div>
        </div>
      </nav>
    </header>
  );
};
