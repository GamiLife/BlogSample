import Link from 'next/link';
import styles from './SocialNetworks.styles';

export interface ISocialItem {
  children: React.ReactNode;
  link: string;
}

export const SocialItem: React.FC<ISocialItem> = ({ children, link = '' }) => {
  return (
    <Link href={link} target="_blank">
      <a target="_blank">
        <div className={styles.SocialItemCSS}>{children}</div>
      </a>
    </Link>
  );
};

export interface ISocialNetworks {
  children: React.ReactNode;
}

export const SocialNetworks = ({ children }: ISocialNetworks) => {
  return <div className={styles.SocialNetworksCSS}>{children}</div>;
};

SocialNetworks.Item = SocialItem;
