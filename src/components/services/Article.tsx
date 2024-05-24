import { useContext } from 'react';
import { ArticleContext } from './ArticleProvider';
import { articles } from '@/data/pet-care';
import CheckIcon from '@/assets/icons/check.svg?react';
import EditIcon from '@/assets/icons/edit.svg?react';

const Article = () => {
  const { currentArticleIndex } = useContext(ArticleContext);

  const article = articles[currentArticleIndex];

  return (
    <article className="flex flex-col">
      <h1 className="text-black text-[40px] font-normal">{article.name}</h1>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex gap-1 items-center">
          <EditIcon />
          <span className="text-black text-xs font-normal">Написано {article.writtenBy}</span>
        </div>
        <div className="flex gap-1 items-center">
          <CheckIcon />
          <span className="text-black text-xs font-normal">
            Проверено
            <span className="underline">{article.reviewedBy}</span> {article.date.toDateString()}
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">{article.content}</div>
    </article>
  );
};

export default Article;
