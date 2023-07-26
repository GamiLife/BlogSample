import { SocialNetworks } from '../../components/SocialNetworks';
import { Instagram, TwitterIcon, YoutubeIcon } from '../../components/ui/Icons';
import { Text } from '../../components/ui/Text';
import { INSTAGRAM, TWITTER, YOUTUBE } from '../../constants';

import styles from './Footer.styles';

export const Social = () => {
  return (
    <div className={styles.SocialCSS}>
      <ul className={styles.SocialListCSS}>
        <li>
          <Text
            text="Copyright © 2023 Figura"
            level="base"
            className="text-sm"
          />
        </li>
        <li>
          <Text
            text="Todos los derechos reservados"
            level="base"
            className="text-sm"
          />
        </li>
      </ul>

      <div>
        <SocialNetworks>
          <SocialNetworks.Item link={INSTAGRAM}>
            <Instagram />
          </SocialNetworks.Item>

          <SocialNetworks.Item link={TWITTER}>
            <TwitterIcon />
          </SocialNetworks.Item>

          <SocialNetworks.Item link={YOUTUBE}>
            <YoutubeIcon />
          </SocialNetworks.Item>
        </SocialNetworks>
      </div>
    </div>
  );
};
