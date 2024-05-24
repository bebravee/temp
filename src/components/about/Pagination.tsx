import { FC } from 'react';
import ArrowBlack from '@/assets/icons/arrow-black.svg?react';

export interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        {currentPage > 1 && (
          <ArrowBlack
            className="rotate-180 cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)}
          />
        )}
        {pageNumbers.map((page) => (
          <div
            key={page}
            className={`flex justify-center items-center text-black text-2xl font-normal rounded-full w-12 h-12 bg-orange cursor-pointer ${page === currentPage ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </div>
        ))}
        {currentPage < totalPages && (
          <ArrowBlack
            className="cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default Pagination;
