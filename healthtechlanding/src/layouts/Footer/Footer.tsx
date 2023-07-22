import { Information } from './Information';
import { Social } from './Social';

export const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-white">
      <div className="flex flex-wrap gap-10 justify-between p-10 md:p-20 mx-auto max-w-screen-xl">
        <Social />
        <Information />
      </div>
    </footer>
  );
};
