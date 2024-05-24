import { useContext } from 'react';
import { categories } from '@/data/pet-care';
import { ArticleContext } from './ArticleProvider';
import { cn } from '@/lib/utils';
import PawIcon from '@/assets/images/paw.png';
import ChevronIcon from '@/assets/icons/chevron-down.svg?react';

const CategoryNav = () => {
  const { currentArticleIndex, setCurrentArticleIndex } = useContext(ArticleContext);

  return (
    <nav className="bg-orange rounded-[30px] flex w-full -mt-12">
      {categories.map((category, index) => (
        <button
          onClick={() => setCurrentArticleIndex(index)}
          className="z-0 relative py-8 flex flex-1 flex-col justify-center items-center gap-2"
        >
          <div
            className={cn(
              currentArticleIndex === index ? 'opacity-100 h-72' : 'opacity-0 h-56',
              'rounded-[30px] z-[-1] bottom-0 absolute w-full bg-blog duration-300'
            )}
          >
            <div className="relative w-full h-full">
              <img src={PawIcon} alt="Paw" className="absolute top-1.5 right-3" />
            </div>
          </div>
          <img src={category.img} alt={category.name} />
          <span className="text-center text-black text-2xl font-normal items-center flex gap-3">
            {category.name}
            {currentArticleIndex === index && <ChevronIcon />}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;
