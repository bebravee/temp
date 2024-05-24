import { ReactNode } from '@tanstack/react-router';
import Cats from '@/assets/images/pet-care-categories/cats.png';
import Dogs from '@/assets/images/pet-care-categories/dogs.png';
import Parrots from '@/assets/images/pet-care-categories/parrots.png';
import Hamsters from '@/assets/images/pet-care-categories/hamsters.png';
import Fishes from '@/assets/images/pet-care-categories/fishes.png';
import OtherPets from '@/assets/images/pet-care-categories/other-pets.png';

export interface IPetCareArticle {
  writtenBy: string;
  reviewedBy: string;
  date: Date;
  name: string;
  content: ReactNode;
}

export interface IPetCareCategory {
  img: string;
  name: string;
  state: IPetCareArticle;
}

export const articles: IPetCareArticle[] = [
  {
    writtenBy: 'Olivia Richardson',
    reviewedBy: 'Dr. Maria Lopez, DVM',
    date: new Date('August 22, 2023'),
    name: 'Как ухаживать за своей кошкой в жаркую погоду',
    content: (
      <>
        <p className="text-black text-base font-normal">
          Летние жары могут оказывать негативное воздействие на вашу кошку. В этой статье мы
          расскажем о том, как обеспечить комфорт и безопасность вашему питомцу в жаркие дни.
        </p>
        <h2 className="text-black text-2xl font-normal">Питание и гидратация</h2>
        <p className="text-black text-base font-normal">
          Важно поддерживать хорошее питание и гидратацию. Убедитесь, что ваша кошка всегда имеет
          доступ к свежей воде и рассмотрите возможность включения увлажненной пищи в ее рацион.
        </p>
        <h2 className="text-black text-2xl font-normal">Прохладные места и вентиляция</h2>
        <p className="text-black text-base font-normal">
          Создайте для вашей кошки прохладные места в доме. Разместите лежанки в тени или установите
          вентиляторы, чтобы обеспечить циркуляцию воздуха.
        </p>
        <h2 className="text-black text-2xl font-normal">Защита от солнца и перегрева</h2>
        <p className="text-black text-base font-normal">
          Избегайте прямых солнечных лучей и оставляйте доступ к прохладным помещениям. Подумайте о
          возможности установки солнцезащитных экранов или штор для защиты от жары.
        </p>
        <p className="text-black text-base font-normal">
          Эти простые меры помогут вашей кошке перенести жару безопасно и комфортно.
        </p>
      </>
    ),
  },
  {
    writtenBy: 'Sandy Eckstein',
    reviewedBy: 'Amy Flowers, DVM',
    date: new Date('May 28, 2023'),
    name: 'Why Cats Bark and Curbing Excessive Barking',
    content: (
      <>
        <p className="text-black text-base font-normal">Никто не должен ожидать, что </p>
        <span className="text-black text-base font-normal  underline">собака</span>
        <span className="text-black text-base font-normal ">
          {' '}
          чтобы никогда не лаять. Это так же неразумно, как ожидать от ребенка, что он никогда не
          заговорит. Но некоторые собаки лают чрезмерно. Если это проблема вашего дома, то первым
          шагом будет выяснение причины чрезмерного лая вашей собаки. Как только вы узнаете причину
          лая, вы сможете начать лечить проблему лая.
        </span>
        <h2 className="text-black text-2xl font-normal">Почему собаки лают?</h2>
        <p className="text-black text-base font-normal">
          Лай - это один из видов речевого общения, который используют собаки, и он может означать
          разные вещи в зависимости от ситуации. <br />
          Вот несколько причин, по которым собаки лают:
          <br />
          <br /> Защита территории: Когда человек или животное заходит на территорию, которую ваша
          собака считает своей, это часто вызывает чрезмерный лай. По мере приближения угрозы лай
          часто становится громче. Во время такого лая ваша собака будет выглядеть настороженной и
          даже агрессивной.
          <br />
          <br />
          Тревога/страх: Некоторые собаки лают на любой шум или предмет, который привлекает их
          внимание или пугает их. Это может произойти где угодно, не только на территории их дома.
          Они прижимают уши и поджимают хвост, когда испытывают страх.
          <br />
          <br />
          Скука/одиночество: Собаки - стайные животные. Собаки, которых надолго оставляют одних,
          будь то в доме или во дворе, могут заскучать или загрустить и часто начинают лаять, потому
          что они несчастны.
          <br />
          <br /> Приветствие/игра: Собаки часто лают, приветствуя людей или других животных. Обычно
          это радостный лай, сопровождающийся вилянием хвостом и иногда прыжками.
          <br />
          <br /> Стремление привлечь к себе внимание: Собаки часто лают, когда хотят чего-то,
          например, выйти на улицу, поиграть или получить лакомство.
          <br />
          <br /> Тревога разлуки / Навязчивый лай: Собаки, страдающие от разлуки{' '}
        </p>
        <span className="текст-черный базовый шрифт-обычное подчеркивание"> беспокойство</span>
        <span className="текст-черный базовый шрифт-обычный">
          {' '}
          часто чрезмерно лают, когда их оставляют одних. Они также обычно проявляют другие
          симптомы, такие как расхаживание по комнате, деструктивность,{' '}
        </span>
        <span className="текст-черный базовый шрифт текста-обычное подчеркивание"> депрессия</span>
        <p className="текст-черный базовый шрифт текста-обычный">
          {' '}
          и неадекватное поведение. устранение. Зазывалы, похоже, лают только для того, чтобы
          услышать звук своего голоса. Они также часто совершают повторяющиеся движения, например,
          бегают по кругу или вдоль забора.
        </p>
        <h2 className="text-black text-2xl font-normal">Как лечить чрезмерный лай</h2>
        <p>
          <span className="text-black text-base font-normal">
            Чтобы заставить вашу собаку меньше лаять, потребуются время, работа, практика и
            последовательность. Это не произойдет в одночасье, но при правильной технике и времени
            вы сможете увидеть прогресс.
            <br />
            <br />
            Вот несколько советов, которые следует запомнить, когда вы начнете пытаться
            контролировать лай вашей собаки.
            <br />
          </span>
          <span className="text-black text-base font-normal">
            Крики стимулируют вашу собаку лаять сильнее, потому что она думает, что вы
            присоединяетесь к ней. Итак, первое правило - говорите спокойно и твердо, но не кричите.
            Большинство собак не понимают, чего вы хотите, когда кричите им “заткнись”. Поэтому
            приучите свою собаку понимать слово “Тихо!”.
          </span>
          <span className="text-black text-base font-normal ">
            Вот два способа: Когда ваша собака начинает лаять, скажите “Тихо” спокойным, твердым
            голосом. Подождите, пока она перестанет лаять, даже если это просто для того, чтобы
            перевести дух, затем похвалите ее и дайте лакомство. Только будьте осторожны и никогда
            не поощряйте их, когда они лают. Со временем они поймут, что если они перестанут лаять
            при слове “тихо”, то получат угощение (и приготовьте вкусное угощение, например, курицу,
            чтобы оно стоило больше, чем лай).В качестве альтернативы вы можете научить свою собаку
            “говорить; как только они научатся это делать безошибочно, подайте им сигнал прекратить
            лаять другой командой, например “тихо”, приложив палец к губам (собаки часто
            воспринимают сигналы тела быстрее, чем голосовые команды). Практикуйте эти команды,
            когда они спокойны, и со временем они должны научиться прекращать лаять по вашей
            команде, даже когда им хочется лаять на что-то.
            <br />
            <br />
          </span>
          <span className="text-black text-base font-normal ">
            Уставшая собака - тихая собака. Если ваша собака лает в одиночестве, перед уходом
            утомите ее. Перед уходом совершите длительную прогулку или пробежку, поиграйте в мяч или
            сходите в парк для собак.
            <br />
            Не позволяйте проблемам повторяться. Чем дольше собака что-то делает, тем более
            укоренившимся становится это ощущение. Лай может вызвать у собак прилив адреналина, что
            делает его приятным. А если позволить собаке лаять в определенных ситуациях, например,
            когда приходит почтальон, это может в конечном итоге сделать собаку агрессивной. Что,
            если ваша собака однажды выйдет из дома во время доставки почты? Устраните проблемы с
            лаем как можно быстрее. Чрезмерный лай может быть вызван некоторыми медицинскими
            проблемами, от укусов пчел до заболеваний головного мозга и продолжающейся боли. У
            пожилых питомцев может развиться старческое слабоумие, которое приводит к чрезмерной
            вокализации. Всегда полезно показать питомца ветеринару, чтобы убедиться в отсутствии
            медицинских причин для возникновения проблем.
            <br />
          </span>
          <br /> Как только вы узнаете, почему ваша собака лает, вы можете начать работать над тем,
          как уменьшить ее раздражающую привычку:
          <br /> Территориальный лай / Защита / Тревога / Страх: Поскольку этот тип лая часто вызван
          страхом или предполагаемой угрозой для их территории или людей, это может быть уменьшается
          за счет ограничения того, что видит ваша собака. Если они находятся в огороженном дворе,
          используйте массивное дерево вместо цепного ограждения. В помещении ограничьте доступ к
          окнам и дверям или закройте их непрозрачной пленкой.
          <br />
          <br />
          Скука/одиночество: Если ваша собака чрезмерно лает в ваше отсутствие, вам нужно обеспечить
          ей больше развлечений или общения, чтобы она не чувствовала себя одинокой или скучающей.
          <br /> вы будете держать собаку на улице, это уменьшит воздействие шума на соседей и
          обеспечит дополнительную безопасность вашего дома. Это также безопаснее, потому что
          собаки, оставленные на улице одни, могут столкнуться с кражей, побегами и т.д.
          <span className="text-black text-base font-normal  underline">poisoning</span>
          <span className="text-black text-base font-normal ">
            , домогательства и другие опасности.
            <br /> Но собаки все равно могут лаять внутри, если им скучно. Поэтому, если ваша собака
            весь день лает, когда вы на работе, попросите кого-нибудь выгуливать ее или играть с ней
            хотя бы час в день.
            <br />
            <br />
            <br />
            Была ли статья полезной?
          </span>
        </p>
      </>
    ),
  },
  {
    writtenBy: 'Sophie Lewis',
    reviewedBy: 'Dr. Mark Wilson, Avian Specialist',
    date: new Date('October 5, 2023'),
    name: 'Как обучить попугая разговаривать',
    content: (
      <>
        <p className="text-black text-base font-normal">
          Разговорчивость попугаев поражает многих владельцев. В этой статье мы поделимся советами
          по обучению вашего попугая разговаривать и развивать коммуникационные навыки.
        </p>
        <h2 className="text-black text-2xl font-normal">Выбор подходящего времени и места</h2>
        <p className="text-black text-base font-normal">
          Обучайте попугая в тихой и спокойной обстановке, когда он находится в хорошем настроении.
          Это поможет ему сосредоточиться и лучше запомнить новые слова и фразы.
        </p>
        <h2 className="text-black text-2xl font-normal">Постепенное обучение</h2>
        <p className="text-black text-base font-normal">
          Начните с простых слов и повторяйте их четко и часто. Поощряйте попугая лакомствами или
          похвалой каждый раз, когда он произносит новое слово правильно.
        </p>
        <h2 className="text-black text-2xl font-normal">Игровой подход</h2>
        <p className="text-black text-base font-normal">
          Используйте игру и интерактивные игрушки для стимуляции учебного процесса. Попугаи учатся
          лучше, когда обучение сочетается с увлекательной деятельностью.
        </p>
        <p className="text-black text-base font-normal">
          С терпением и систематичностью ваш попугай сможет научиться разговаривать и стать забавным
          и сообразительным спутником.
        </p>
      </>
    ),
  },
  {
    writtenBy: 'David Parker',
    reviewedBy: 'Dr. Emma Scott, DVM',
    date: new Date('November 12, 2023'),
    name: 'Основы ухода за хомяком в домашних условиях',
    content: (
      <>
        <p className="text-black text-base font-normal">
          Хомяки - это популярные домашние питомцы благодаря своей милой внешности и удивительному
          поведению. В этой статье мы рассмотрим основы ухода за хомяком, чтобы ваш питомец был
          здоровым и счастливым.
        </p>
        <h2 className="text-black text-2xl font-normal">Клетка и оборудование</h2>
        <p className="text-black text-base font-normal">
          Выберите просторную и безопасную клетку для вашего хомяка. Он должен иметь достаточно
          места для движения и исследования. Обеспечьте клетку толстым слоем подстилки, таким как
          деревянная опилка или специальные гранулы.
        </p>
        <h2 className="text-black text-2xl font-normal">Питание и вода</h2>
        <p className="text-black text-base font-normal">
          Хомяки питаются смесью семян, овощами и фруктами. Предоставляйте свежие овощи и фрукты,
          такие как яблоки, морковь и огурцы, регулярно. Обеспечьте постоянный доступ к свежей воде
          через питьевую бутылку.
        </p>
        <h2 className="text-black text-2xl font-normal">Тренировка и активность</h2>
        <p className="text-black text-base font-normal">
          Хомяки активны ночью, поэтому предоставьте им колесо для бега и игрушки для забавы.
          Обновляйте игрушки время от времени, чтобы предотвратить скученность.
        </p>
        <h2 className="text-black text-2xl font-normal">Гигиена и уход</h2>
        <p className="text-black text-base font-normal">
          Регулярно очищайте клетку от использованной подстилки и предоставляйте свежую. Проверяйте
          здоровье хомяка, обращая внимание на его активность и внешний вид. Поддерживайте чистоту
          шерсти и когтей вашего питомца.
        </p>
        <p className="text-black text-base font-normal">
          Следуя этим простым советам, вы сможете обеспечить своему хомяку долгую и счастливую жизнь
          в вашем доме.
        </p>
      </>
    ),
  },
  {
    writtenBy: 'Jessica Thompson',
    reviewedBy: 'Aquarium Specialist Team',
    date: new Date('December 3, 2023'),
    name: 'Как создать идеальное аквариумное сообщество',
    content: (
      <>
        <p className="text-black text-base font-normal">
          Создание аквариумного сообщества - это увлекательное искусство, которое требует внимания к
          деталям и понимания потребностей каждого вида рыбы. В этой статье мы расскажем, как
          создать гармоничное сообщество в вашем аквариуме.
        </p>
        <h2 className="text-black text-2xl font-normal">Выбор совместимых видов</h2>
        <p className="text-black text-base font-normal">
          Исследуйте различные виды рыб и их поведение перед тем, как смешивать их в аквариуме.
          Учитывайте размер, темперамент и требования к водным параметрам каждого вида.
        </p>
        <h2 className="text-black text-2xl font-normal">Территориальное разделение</h2>
        <p className="text-black text-base font-normal">
          Создайте в аквариуме различные зоны с помощью декоративных элементов, растений и укрытий.
          Это поможет рыбам чувствовать себя комфортно и избегать конфликтов.
        </p>
        <h2 className="text-black text-2xl font-normal">Рацион и уход</h2>
        <p className="text-black text-base font-normal">
          Обеспечьте разнообразное и сбалансированное питание для всех обитателей аквариума.
          Регулярно проверяйте качество воды и поддерживайте оптимальные условия для здоровья рыб.
        </p>
        <p className="text-black text-base font-normal">
          Создание и поддержание идеального аквариумного сообщества - это замечательный способ
          наслаждаться красотой и гармонией подводного мира прямо у себя дома.
        </p>
      </>
    ),
  },
  {
    writtenBy: 'Emily Watson',
    reviewedBy: 'Dr. John Harris, DVM',
    date: new Date('January 18, 2024'),
    name: 'Основные аспекты ухода за другими домашними животными',
    content: (
      <>
        <p className="text-black text-base font-normal">
          Помимо кошек, собак, попугаев, хомяков и рыбок, существует множество других уникальных
          домашних животных, которые требуют особого ухода. В этой статье мы рассмотрим основные
          аспекты заботы о таких питомцах и что важно учитывать.
        </p>
        <h2 className="text-black text-2xl font-normal">Особенности ухода</h2>
        <p className="text-black text-base font-normal">
          Каждый вид животных имеет свои особенности и требования. Например, грызуны, птицы или
          рептилии могут требовать специализированного оборудования и диеты, отличающихся от
          традиционных домашних животных.
        </p>
        <h2 className="text-black text-2xl font-normal">Здоровье и безопасность</h2>
        <p className="text-black text-base font-normal">
          Обратите особое внимание на здоровье и безопасность своего питомца. Регулярные визиты к
          ветеринару, контроль за питанием и условиями содержания помогут предотвратить множество
          проблем.
        </p>
        <h2 className="text-black text-2xl font-normal">Взаимодействие и забава</h2>
        <p className="text-black text-base font-normal">
          Уделите время для взаимодействия и игр с вашими домашними животными. Это укрепляет узы
          между вами и помогает вашему питомцу чувствовать себя счастливым и комфортным.
        </p>
        <p className="text-black text-base font-normal">
          Будьте внимательны к потребностям и характеру вашего домашнего животного, и вы обеспечите
          ему здоровую и радостную жизнь в вашем доме.
        </p>
      </>
    ),
  },
  {
    writtenBy: 'Olivia Green',
    reviewedBy: 'Avian Specialist Team',
    date: new Date('February 22, 2024'),
    name: 'Как ухаживать за попугаем: основные аспекты',
    content: (
      <>
        <p className="text-black text-base font-normal">
          Попугаи - это яркие и умные птицы, которые могут стать прекрасными компаньонами. В этой
          статье мы рассмотрим основные аспекты ухода за попугаем, чтобы обеспечить ему долгую и
          счастливую жизнь.
        </p>
        <h2 className="text-black text-2xl font-normal">Клетка и окружение</h2>
        <p className="text-black text-base font-normal">
          Выберите просторную клетку с горизонтальной ориентацией, чтобы попугаи могли летать и
          исследовать окружающее пространство. Обеспечьте клетку разнообразными игрушками, включая
          качели, лестницы и жевательные игрушки.
        </p>
        <h2 className="text-black text-2xl font-normal">Питание и диета</h2>
        <p className="text-black text-base font-normal">
          Попугаи нуждаются в разнообразной и сбалансированной диете, включающей пеллеты, свежие
          фрукты, овощи и зелень. Обеспечьте доступ к чистой пресной воде и регулярно обновляйте ее.
        </p>
        <h2 className="text-black text-2xl font-normal">Социализация и взаимодействие</h2>
        <p className="text-black text-base font-normal">
          Попугаи - социальные птицы и нуждаются во внимании и взаимодействии с людьми или другими
          птицами. Уделяйте время ежедневно для общения, игр и тренировок.
        </p>
        <h2 className="text-black text-2xl font-normal">Здоровье и гигиена</h2>
        <p className="text-black text-base font-normal">
          Поддерживайте чистоту в клетке, удаляйте использованную подстилку и регулярно моющие
          игрушки и поилки. Обратите внимание на здоровье птицы, наблюдая за ее поведением и
          физическим состоянием.
        </p>
        <p className="text-black text-base font-normal">
          С правильным уходом и вниманием ваш попугай станет не только красивым, но и счастливым
          членом вашей семьи.
        </p>
      </>
    ),
  },
];

export const categories: IPetCareCategory[] = [
  {
    name: 'Кошки',
    img: Cats,
    state: articles[0],
  },
  {
    name: 'Собаки',
    img: Dogs,
    state: articles[1],
  },
  {
    name: 'Попугаи',
    img: Parrots,
    state: articles[2],
  },
  {
    name: 'Хомяки',
    img: Hamsters,
    state: articles[3],
  },
  {
    name: 'Рыбки',
    img: Fishes,
    state: articles[4],
  },
  {
    name: 'Другие домашние животные',
    img: OtherPets,
    state: articles[5],
  },
];
