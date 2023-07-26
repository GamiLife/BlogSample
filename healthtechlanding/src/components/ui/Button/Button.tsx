import classNames from 'classnames';
import styles from './Button.styles';

export interface IButton {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<IButton> = ({ children, className }) => {
  return (
    <button className={classNames(styles.ButtonCSS, className)}>
      {children}
    </button>
  );
};
