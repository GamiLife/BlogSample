import { Button } from '../../components/ui/Button';
import { Image } from '../../components/ui/Image';

export const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 px-4 py-2.5 lg:px-6 bg-white dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Brand Logo"
              width={100}
              height={40}
            />
          </a>

          <div className="flex justify-between items-center gap-x-8">
            <ul className="flex justify-between items-center gap-x-14">
              <li className="">
                <a href="#">Para ti</a>
              </li>
              <li className="">
                <a href="#">Acerca de</a>
              </li>
            </ul>

            <Button className="shadow-md">
              <span>Comenzar hoy</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
