import { ReactNode, useState } from 'react';
import Button from '../Button';
import Arrow from '@/assets/icons/arrow-right.svg?react';
import { cn } from '@/lib/utils';

export interface IService {
  name: string;
  description: ReactNode;
}

export const services: IService[] = [
  {
    name: 'Здравоохранение',
    description: (
      <>
        <span className="text-[#eee] text-2xl font-normal">
          Точная диагностика болезней животных:
          <br />
        </span>
        <span className="text-[#eee] text-2xl font-normal">
          Проверки здоровья;
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Когда я могу записаться на осмотр своего питомца?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Записаться на прием к врачу можно в течение всей недели, включая выходные дни.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Сколько стоит осмотр домашнего животного?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Стоимость проверки здоровья питомца составляет 50 лари (цены на 2023 год). Любые
          дополнительные процедуры и лечение оплачиваются дополнительно.
          <br />
          <br />
          Мы настоятельно рекомендуем присоединиться к нашим планам охраны здоровья домашних
          животных, в которых проверка здоровья включена в план, и вы можете распределить расходы на
          нее и другие регулярные расходы по уходу за питомцем в виде простых ежемесячных платежей.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Сколько времени занимает проверка здоровья питомца?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Стандартная проверка здоровья питомца занимает 15 - 20 минут.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Кто проводит проверку здоровья питомца?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Первичный осмотр может проводить один из наших ветеринаров или студент последнего курса
          ветеринарного факультета, работающий под пристальным наблюдением опытного ветеринарного
          врача. Ветеринар также осмотрит вашего питомца и обсудит любые результаты и необходимое
          лечение.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Где проводится проверка здоровья питомца?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Проверка здоровья питомца проводится в клинике SmartCare Animal (в Тбилиси, Грузия), где
          могут удовлетворить все потребности вашего питомца. Могу ли я заказать проверку здоровья
          для любого вида животного?
          <br />
          Да, у нас есть не только команда опытных ветеринаров по мелким животным, которые
          занимаются кошками и собаками, но и команда специалистов по экзотике, которые могут
          провести осмотр здоровья самых необычных питомцев, включая птиц, грызунов и рептилий.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Как часто мой питомец должен проходить медицинский осмотр?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Все домашние животные должны проходить полную проверку здоровья раз в год (обычно во время
          ежегодной вакцинации). Мы рекомендуем проверять пожилых питомцев (кошек старше десяти лет,
          собак старше восьми лет) каждые шесть месяцев, поскольку они могут быть склонны к развитию
          возрастных заболеваний.
        </span>
      </>
    ),
  },
  {
    name: 'Груминг',
    description: (
      <>
        <span className="text-[#eee] text-2xl font-normal">
          Профессиональный уход за шерстью животных:
          <br />
        </span>
        <span className="text-[#eee] text-2xl font-normal">
          Стрижки, мытье и сушка;
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Когда я могу записаться на груминг для моего питомца?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Записаться на груминг можно в течение всей недели, включая выходные дни.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Сколько стоит груминг?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Стоимость груминга зависит от размера и породы вашего питомца. Средняя цена составляет 70
          лари.
          <br />
          <br />
          Мы предлагаем специальные пакеты услуг, которые включают регулярные сеансы груминга по
          сниженной цене.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Как долго длится сеанс груминга?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Обычно сеанс груминга длится от 1 до 2 часов в зависимости от потребностей вашего питомца.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Кто проводит груминг?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Груминг проводится нашими опытными грумерами, которые специализируются на уходе за разными
          породами животных.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Где проводится груминг?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Все процедуры проводятся в нашем центре груминга, оборудованном всем необходимым для
          комфортного и безопасного ухода за вашим питомцем.
        </span>
      </>
    ),
  },
  {
    name: 'Тренировка собак',
    description: (
      <>
        <span className="text-[#eee] text-2xl font-normal">
          Профессиональная тренировка собак:
          <br />
        </span>
        <span className="text-[#eee] text-2xl font-normal">
          Обучение послушанию, социализация;
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Когда я могу записаться на тренировку для моей собаки?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Записаться на тренировку можно в течение всей недели, включая выходные дни.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Сколько стоит тренировка собаки?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Стоимость тренировки зависит от выбранного курса. Средняя цена за занятие составляет 100
          лари.
          <br />
          <br />
          Мы предлагаем пакеты занятий, которые включают скидки при покупке нескольких занятий
          сразу.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Как долго длится занятие?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Стандартное занятие длится 1 час.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Кто проводит тренировки?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Все тренировки проводятся нашими сертифицированными кинологами с многолетним опытом.
          <br />
          <br />
        </span>
        <span className="text-black text-base font-normal">
          Где проводятся тренировки?
          <br />
        </span>
        <span className="text-[#eee] text-base font-normal">
          Тренировки проходят в нашем центре для животных, который оборудован всеми необходимыми
          материалами и площадками для эффективной тренировки.
        </span>
      </>
    ),
  },
];

const ServicesList = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState<number>(0);

  const next = () => {
    if (currentServiceIndex < services.length - 1) setCurrentServiceIndex(currentServiceIndex + 1);
  };

  const previous = () => {
    if (currentServiceIndex > 0) setCurrentServiceIndex(currentServiceIndex - 1);
  };

  return (
    <div>
      <h1 className="text-[#eee] text-[40px] font-normal pl-8">
        {services[currentServiceIndex].name}
      </h1>
      <div className="flex justify-center items-center gap-9 mt-5">
        <div className="flex items-center">
          <button
            className={cn(
              'rounded-full h-12 w-12 flex justify-center items-center',
              currentServiceIndex === 0 ? 'text-white bg-blog' : 'text-black bg-shopping'
            )}
            onClick={previous}
            disabled={currentServiceIndex === 0}
          >
            <Arrow className="rotate-180" />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-start">
          {services[currentServiceIndex].description}
          <Button variant="dark" className="mt-7">
            Заказать сейчас
          </Button>
        </div>
        <div className="flex items-center">
          <button
            className={cn(
              'rounded-full h-12 w-12 flex justify-center items-center',
              currentServiceIndex === services.length - 1
                ? 'text-white bg-blog'
                : 'text-black bg-shopping'
            )}
            onClick={next}
            disabled={currentServiceIndex === services.length - 1}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
