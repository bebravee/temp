import React from 'react';
import { ArticleContext } from './ArticleProvider';
import { useCart } from './useCart';
import { articles } from '@/data/pet-products';

const Article: React.FC = () => {
  const { currentArticleIndex } = React.useContext(ArticleContext);
  const { addToCart } = useCart();

  if (currentArticleIndex === undefined) return null;

  const article = articles[currentArticleIndex];

  return (
    <div className="div-product">
      {article.items.map((item, index) => (
        <div className="div-product-container" key={index}>
          <img
            className="img-container-product"
            src={article.images[index]}
            alt={`Item ${index + 1}`}
          />
          <p className="p-container-product">{item}</p>
          <p>Цена: {article.price[index]} ₽</p>
          <button
            className="btn-product"
            onClick={() =>
              addToCart({
                item,
                price: article.price[index],
                image: article.images[index],
              })
            }
          >
            В корзину
          </button>
        </div>
      ))}
    </div>
  );
};

export default Article;
