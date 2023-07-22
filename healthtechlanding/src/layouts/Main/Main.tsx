export interface IMain {
  children: React.ReactNode;
}

export const Main: React.FC<IMain> = ({ children }) => {
  return <main className="py-10 px-5 max-w-[1000px] m-auto">{children}</main>;
};
