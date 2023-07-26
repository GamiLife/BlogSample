import styles from './SocialNetworks.styles';

export interface ISocialItem {
  children: React.ReactNode;
}

export const SocialItem: React.FC<ISocialItem> = ({ children }) => {
  return <div className={styles.SocialItemCSS}>{children}</div>;
};

export interface ISocialNetworks {
  children: React.ReactNode;
}

export const SocialNetworks = ({ children }: ISocialNetworks) => {
  return <div className={styles.SocialNetworksCSS}>{children}</div>;
};

SocialNetworks.Item = SocialItem;
