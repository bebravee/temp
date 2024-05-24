import { createFileRoute } from '@tanstack/react-router';
import Pets from '@/assets/images/pet-care-categories/pets.png';
import { ArticleProvider } from '@/components/services/ArticleProvider';
import CategoryNav from '@/components/services/CategoryNav';
import Article from '@/components/services/Article';
import SearchIcon from '@/assets/icons/search.svg?react';
import Products from '@/components/services/Products';
import Cart from '@/components/services/Cart';
import CartToggleButton from '@/components/services/CartToggleButton';

import { useState } from 'react';
import '../style.scss';

export const Route = createFileRoute('/pet-care')({
  component: () => {
    const [selectedTab, setSelectedTab] = useState('Блог');
    const [isCartVisible, setIsCartVisible] = useState(false); // State for cart visibility

    const toggleCartVisibility = () => {
      setIsCartVisible(!isCartVisible);
    };

    return (
      <ArticleProvider>
        <main className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-black text-[40px] font-normal">Категория</h1>
            <h1 className="text-right text-black text-[40px] font-normal">
              Повседневный Уход за Питомцами
            </h1>
            <img src={Pets} alt="Питомцы" />
          </div>
          <CategoryNav />
          <div className="flex gap-8 mt-8 items-center">
            <div className="flex gap-4">
              <SearchIcon />
              <div className="bg-blog w-[2px]" />
            </div>
            <p className="nav-p-ad">
              <p onClick={() => setSelectedTab('Блог')}>Блог</p>
              <p onClick={() => setSelectedTab('Товары')}>Товары</p>
            </p>
          </div>

          {selectedTab === 'Блог' ? (
            <Article />
          ) : (
            <div>
              <Products />
              <Cart isVisible={isCartVisible} onClose={toggleCartVisibility} />{' '}
              {!isCartVisible && <CartToggleButton onClick={toggleCartVisibility} />}
            </div>
          )}
        </main>
      </ArticleProvider>
    );
  },
});
