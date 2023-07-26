import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { RightIcon } from '../../components/ui/Icons';
import { Text } from '../../components/ui/Text';
import { IText } from '../../components/ui/Text/Text';

import styles from './Informative.styles';

export type TInformativeElement = {
  children: string | React.ReactNode;
};

type TTitle = TInformativeElement & {
  as?: IText['as'];
};
const Title: React.FC<TTitle> = ({ children, as = 'h1' }) => (
  <Text text={children} level="xl" fontWeight="bold" as={as ?? 'h1'} />
);

type TDescription = TInformativeElement;
const Description: React.FC<TDescription> = ({ children }) => (
  <Text text={children} level="base" fontWeight="normal" />
);

type TAction = TInformativeElement & {
  link: string;
};
const Action: React.FC<TAction> = ({ children, link = '/' }) => (
  <Link href={link} target="_blank">
    <a target="_blank">
      <Button className="max-w-fit">
        <span className={styles.ActionSpanCSS}>
          {children}
          <span>
            <RightIcon />
          </span>
        </span>
      </Button>
    </a>
  </Link>
);

export interface IInformative {
  children: React.ReactNode;
}

export const Informative = ({ children }: IInformative) => {
  return <div className={styles.InformativeCSS}>{children}</div>;
};

Informative.Title = Title;
Informative.Description = Description;
Informative.Action = Action;
