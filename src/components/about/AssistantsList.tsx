import AssistantCard, { IAssistant, TSpecialty } from './AssistantCard';
import { assistants } from '@/data/assistants';
import Pagination from './Pagination';
import { useState } from 'react';

const PAGE_SIZE = 12;

const filters = {
  all: (array: IAssistant[]) => array,
  veterinarians: (array: IAssistant[]) =>
    array.filter((item) => item.specialty === 'veterinarians'),
  cynologists: (array: IAssistant[]) => array.filter((item) => item.specialty === 'cynologists'),
  'pet-groomers': (array: IAssistant[]) =>
    array.filter((item) => item.specialty === 'pet-groomers'),
  'dogs-handlers': (array: IAssistant[]) =>
    array.filter((item) => item.specialty === 'dogs-handlers'),
  'vet-assistants': (array: IAssistant[]) =>
    array.filter((item) => item.specialty === 'vet-assistants'),
  'vet-nurses': (array: IAssistant[]) => array.filter((item) => item.specialty === 'vet-nurses'),
};

const filterAssistants = (filterName: TSpecialty | 'all', array: IAssistant[]) => {
  console.log(`Filtering with filterName: ${filterName}`);
  if (!filters[filterName]) {
    return array;
  }
  return filters[filterName](array);
};

const AssistantsList = () => {
  const location = window.location;
  const filterName = location.pathname.split('/')[2] as TSpecialty | 'all';
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentAssistants = filterAssistants(filterName, assistants).slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex justify-center items-start">
        <div className="grid grid-cols-3 gap-x-16 gap-y-14 justify-center items-center">
          {currentAssistants.map((assistant, index) => (
            <AssistantCard data={assistant} key={index} />
          ))}
        </div>
      </div>
      <Pagination
        totalItems={assistants.length}
        itemsPerPage={PAGE_SIZE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default AssistantsList;
