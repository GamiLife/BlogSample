export interface IButton {
  children: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ children }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      {children}
    </button>
  );
};
