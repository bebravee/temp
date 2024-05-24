import { FC } from 'react';
import Button from '../Button';
import ArrowIcon from '@/assets/icons/arrow-right.svg?react';
import { cn } from '@/lib/utils';

export type TSpecialty =
  | 'veterinarians'
  | 'cynologists'
  | 'pet-groomers'
  | 'dogs-handlers'
  | 'vet-assistants'
  | 'vet-nurses';

export interface IAssistant {
  name: string;
  img: string;
  specialty: TSpecialty;
}

interface IAssistantCardProps {
  data: IAssistant;
}

const AssistantCard: FC<IAssistantCardProps> = ({ data }) => {
  return (
    <div className="bg-shopping rounded-[30px] px-7 py-6 max-w-72">
      <div className="flex justify-center items-center">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="flex items-center gap-5 justify-center mt-3">
        <span className="text-black text-2xl font-normal">{data.name}</span>
        <Button className={cn('py-1 px-4')}>
          <ArrowIcon className="h-9" />
        </Button>
      </div>
    </div>
  );
};

export default AssistantCard;
