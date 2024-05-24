import { ReactNode } from '@tanstack/react-router';
import { createContext, useState } from 'react';

export interface ArticleProps {
  currentArticleIndex: number;
  setCurrentArticleIndex: (value: number) => void;
}

export const value = {
  currentArticleIndex: 0,
  setCurrentArticleIndex: () => {},
};

export const ArticleContext = createContext<ArticleProps>(value);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  return (
    <ArticleContext.Provider value={{ currentArticleIndex, setCurrentArticleIndex }}>
      {children}
    </ArticleContext.Provider>
  );
};
