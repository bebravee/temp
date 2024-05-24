import { useEffect, useState } from 'react';
import Logo from '@/assets/logo.png';
import { Link } from '@tanstack/react-router';
import Button from './Button';
import { cn } from '@/lib/utils';

export interface Link {
  name: string;
  url: string;
}

const links = [
  {
    name: 'О нас',
    url: '/about/all',
  },
  {
    name: 'Наши услуги',
    url: '/services',
  },
  {
    name: 'Уход за животными',
    url: '/pet-care',
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cn(isScrolled ? 'mt-4' : 'mt-[54px]', 'z-20 fixed left-0 w-full duration-300')}>
      <div className="container mx-auto">
        <header
          style={{ zIndex: 10, boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)' }}
          className="w-full bg-[#fff] z-30 rounded-full px-16 py-4 flex justify-between items-center"
        >
          <img className="w-[117px] h-[52px] object-contain" src={Logo} alt="логотип" />
          <div className="flex items-center gap-5">
            {links.map((link) => (
              <Link
                className={cn(
                  'text-center text-black text-base font-normal',
                  window.location.pathname.includes(link.url) && 'text-service'
                )}
                key={link.name}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <Button>Войти</Button>
            </Link>
            <Link to="/book">
              <Button>Забронировать</Button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
