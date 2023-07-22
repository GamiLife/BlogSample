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
  id?: string;
}

export const Section = ({ children, id }: ISection) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-between gap-5 md:flex-row"
    >
      {children}
    </section>
  );
};

Section.Information = Information;
Section.VisualExample = VisualExample;
