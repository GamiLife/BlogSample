export type TSectionElement = {
  children: React.ReactNode;
};

type TInformation = TSectionElement;
const Information: React.FC<TInformation> = ({ children }) => (
  <div className="container">{children}</div>
);

type TVisualExample = TSectionElement;
const VisualExample: React.FC<TVisualExample> = ({ children }) => (
  <div className="container flex justify-center items-center">{children}</div>
);

export interface ISection {
  children: React.ReactNode;
}

export const Section = ({ children }: ISection) => {
  return <section className="flex justify-between gap-x-5">{children}</section>;
};

Section.Information = Information;
Section.VisualExample = VisualExample;
