import styles from './Section.styles';

export type TSectionElement = {
  children: React.ReactNode;
};

type TInformation = TSectionElement;
const Information: React.FC<TInformation> = ({ children }) => (
  <div className={styles.SectionInformationCSS}>{children}</div>
);

type TVisualExample = TSectionElement;
const VisualExample: React.FC<TVisualExample> = ({ children }) => (
  <div className={styles.SectionVisualExampleCSS}>{children}</div>
);

export interface ISection {
  children: React.ReactNode;
  id?: string;
}

export const Section = ({ children, id }: ISection) => {
  return (
    <section id={id} className={styles.SectionCSS}>
      {children}
    </section>
  );
};

Section.Information = Information;
Section.VisualExample = VisualExample;
