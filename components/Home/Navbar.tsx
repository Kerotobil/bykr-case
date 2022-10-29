import { Logo } from '../General/Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';

export const Navbar = () => {
  const menuList = ['About Us', 'What We Do', 'Our work', 'Blog', 'Say hi'];
  return (
    <div className="flex justify-between px-9 md:px-24 items-center max-w-7xl">
      <Logo />
      <ul className="hidden md:flex justify-between w-2/4 text-white">
        {menuList.map((item, index) => (
          <li key={index}>
            <span> {item}</span>
          </li>
        ))}
      </ul>
      <Bars3Icon className="w-6 text-white" />
    </div>
  );
};
