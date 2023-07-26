import styles from './Main.styles';

export interface IMain {
  children: React.ReactNode;
}

export const Main: React.FC<IMain> = ({ children }) => {
  return <main className={styles.MainCSS}>{children}</main>;
};
