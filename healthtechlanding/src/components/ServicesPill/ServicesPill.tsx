import { HomeIcon, LockerIcon, UserIcon } from '../ui/Icons';

interface IPill {
  children: React.ReactNode;
}
const Pill = ({ children }: IPill) => (
  <div className="flex flex-between px-2 py-1 md:p-0 rounded-full bg-neutralPrimary md:bg-transparent gap-1 md:gap-2 text-sm">
    {children}
  </div>
);

export const ServicesPill = () => {
  return (
    <div className="flex flex-between flex-wrap md:bg-neutralPrimary md:rounded-full gap-5 md:gap-10 py-3 md:px-8 max-w-fit text-slate-500">
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
