export interface IButton {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<IButton> = ({ children, className }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-6 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};
