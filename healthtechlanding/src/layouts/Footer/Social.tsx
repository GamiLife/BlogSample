import { SocialNetworks } from '../../components/SocialNetworks';
import { Instagram, TwitterIcon, YoutubeIcon } from '../../components/ui/Icons';
import { Text } from '../../components/ui/Text';

export const Social = () => {
  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-3">
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
          <SocialNetworks.Item>
            <Instagram />
          </SocialNetworks.Item>

          <SocialNetworks.Item>
            <TwitterIcon />
          </SocialNetworks.Item>

          <SocialNetworks.Item>
            <YoutubeIcon />
          </SocialNetworks.Item>
        </SocialNetworks>
      </div>
    </div>
  );
};
