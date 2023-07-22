export interface ISocialItem {
  children: React.ReactNode;
}

export const SocialItem: React.FC<ISocialItem> = ({ children }) => {
  return <div className="flex p-3 rounded-full bg-zinc-600">{children}</div>;
};

export interface ISocialNetworks {
  children: React.ReactNode;
}

export const SocialNetworks = ({ children }: ISocialNetworks) => {
  return <div className="flex justify-between gap-3">{children}</div>;
};

SocialNetworks.Item = SocialItem;
