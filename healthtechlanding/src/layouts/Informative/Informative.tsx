import { Button } from '../../components/ui/Button';
import { Text } from '../../components/ui/Text';
import { IText } from '../../components/ui/Text/Text';

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

type TAction = TInformativeElement;
const Action: React.FC<TAction> = ({ children }) => (
  <Button className="max-w-fit">
    <span>{children}</span>
  </Button>
);

export interface IInformative {
  children: React.ReactNode;
}

export const Informative = ({ children }: IInformative) => {
  return <div className="flex flex-col gap-y-10">{children}</div>;
};

Informative.Title = Title;
Informative.Description = Description;
Informative.Action = Action;
