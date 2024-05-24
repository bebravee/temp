import Button from '../Button';
import { cn } from '@/lib/utils';
import ArrowIcon from '@/assets/icons/arrow-right.svg?react';
import FilterIcon from '@/assets/icons/filter.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import { Link } from '@tanstack/react-router';
import { TSpecialty } from './AssistantCard';

export interface IFilter {
  name: string;
  url: string;
  id: TSpecialty | 'all';
}

export const filters: IFilter[] = [
  {
    name: 'Все',
    url: '/about/all',
    id: 'all',
  },
  {
    name: 'Ветеринары',
    url: '/about/veterinarians',
    id: 'veterinarians',
  },
  {
    name: 'Кинологи',
    url: '/about/cynologists',
    id: 'cynologists',
  },
  {
    name: 'Грумеры',
    url: '/about/pet-groomers',
    id: 'pet-groomers',
  },
  {
    name: 'Дрессировщики',
    url: '/about/dogs-handlers',
    id: 'dogs-handlers',
  },
  {
    name: 'Вет. ассистенты',
    url: '/about/vet-assistants',
    id: 'vet-assistants',
  },
  {
    name: 'Вет. медсестры',
    url: '/about/vet-nurses',
    id: 'vet-nurses',
  },
];

const Search = () => {
  const location = window.location;
  const filterName = location.pathname.split('/')[2] as TSpecialty | 'all';

  return (
    <div className="flex gap-8">
      <div className="flex gap-4">
        <SearchIcon />
        <div className="bg-blog w-[2px]" />
      </div>
      <div className="flex justify-between flex-1">
        {filters.map((item) => (
          <Link to={item.url} key={item.name}>
            <Button variant={item.id === filterName ? 'primary' : 'ghost'}>{item.name}</Button>
          </Link>
        ))}
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Button variant="ghost" className="w-10 p-0">
          <FilterIcon />
        </Button>
        <Button className={cn('py-1 px-4')}>
          <ArrowIcon className="h-9" />
        </Button>
      </div>
    </div>
  );
};

export default Search;
