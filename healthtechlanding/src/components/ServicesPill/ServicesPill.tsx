import { HomeIcon, LockerIcon, UserIcon } from '../ui/Icons';

export const ServicesPill = () => {
  return (
    <div className="flex flex-between gap-10 py-3 px-8 bg-slate-100 rounded-full max-w-fit text-slate-500">
      <div className="flex flex-between gap-5">
        <UserIcon />
        <span>Atención 24/7</span>
      </div>

      <div className="flex flex-between gap-5">
        <HomeIcon />
        <span>A domicilio. Sin filas</span>
      </div>

      <div className="flex flex-between gap-5">
        <LockerIcon />
        <span>Seguro</span>
      </div>
    </div>
  );
};
