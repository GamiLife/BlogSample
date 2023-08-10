import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Button } from '../../components/ui/Button';
import { RightIcon } from '../../components/ui/Icons';
import { Image } from '../../components/ui/Image';

import styles from './Header.styles';
import { useLandingBotStore } from '../../store';

interface IStartTodayButton {
  link: string;
}
const StartTodayButton = ({ link }: IStartTodayButton) => (
  <Link href={link} target="_blank">
    <a target="_blank">
      <Button className={styles.StartButtonTodayCSS}>
        <span className={styles.StartButtonTodaySpanCSS}>
          Comenzar hoy
          <span>
            <RightIcon />
          </span>
        </span>
      </Button>
    </a>
  </Link>
);

export const Header = () => {
  const [linkSelected, setLinkSelected] = useState('');
  const botUrlSender = useLandingBotStore((state) => state.botUrlSender);

  const handleLink = (anchor: string) => setLinkSelected(anchor);

  return (
    <header className={styles.HeaderCSS}>
      <nav className={styles.NavCSS}>
        <div className={styles.NavContainerCSS}>
          <a href="#" className={styles.NavLogoCSS}>
            <Image
              src="/assets/logo.jpeg"
              alt="Brand Logo"
              width={70}
              height={60}
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
              <StartTodayButton link={botUrlSender} />
            </div>
          </div>

          <div className={styles.NavButtonMobileCSS}>
            <StartTodayButton link={botUrlSender} />
          </div>
        </div>
      </nav>
    </header>
  );
};
