import { FC, useState } from 'react';
import CheckIcon from '@/assets/icons/check.svg?react';

export interface ICheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

const Checkbox: FC<ICheckboxProps> = ({ checked, onChange }) => {
  const [check, setCheck] = useState(checked);

  const handleChange = () => {
    setCheck(!check);
    onChange && onChange();
  };

  return (
    <div className="relative w-8 h-8">
      <input
        type="checkbox"
        className="absolute z-10 w-8 h-8 opacity-0"
        checked={check}
        onChange={handleChange}
      />
      {check ? (
        <div className="absolute w-8 h-8 flex justify-center items-center bg-blue-500 rounded-[5px]">
          <CheckIcon />
        </div>
      ) : (
        <div className="absolute w-8 h-8 flex justify-center items-center bg-white rounded-[5px]" />
      )}
    </div>
  );
};

export default Checkbox;
