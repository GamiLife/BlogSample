import { HomeIcon, LockerIcon, UserIcon } from '../ui/Icons';

import styles from './ServicePill.styles';

interface IPill {
  children: React.ReactNode;
}
const Pill = ({ children }: IPill) => (
  <div className={styles.PillCSS}>{children}</div>
);

export const ServicesPill = () => {
  return (
    <div className={styles.ServicePillCSS}>
      <Pill>
        <UserIcon />
        <span>Atención 24/7</span>
      </Pill>

      <Pill>
        <HomeIcon />
        <span>A domicilio.Sin filas</span>
      </Pill>

      <Pill>
        <LockerIcon />
        <span>Seguro</span>
      </Pill>
    </div>
  );
};
