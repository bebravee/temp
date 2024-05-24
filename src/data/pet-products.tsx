import { ReactNode } from 'react';
import Cats from '@/assets/images/pet-care-categories/cats.png';
import Dogs from '@/assets/images/pet-care-categories/dogs.png';
import Parrots from '@/assets/images/pet-care-categories/parrots.png';
import Hamsters from '@/assets/images/pet-care-categories/hamsters.png';
import Fishes from '@/assets/images/pet-care-categories/fishes.png';
import OtherPets from '@/assets/images/pet-care-categories/other-pets.png';

import cat_img1 from '@/assets/images/pet-product/cat_img1.jpg';
import cat_img2 from '@/assets/images/pet-product/cat_img2.jpg';
import cat_img3 from '@/assets/images/pet-product/cat_img3.jpg';
import cat_img4 from '@/assets/images/pet-product/cat_img4.jpg';
import cat_img5 from '@/assets/images/pet-product/cat_img5.jpg';
import cat_img6 from '@/assets/images/pet-product/cat_img6.jpg';
import cat_img7 from '@/assets/images/pet-product/cat_img7.jpg';
import cat_img8 from '@/assets/images/pet-product/cat_img8.jpg';

import dog_img1 from '@/assets/images/pet-product/dog_img1.jpg';
import dog_img2 from '@/assets/images/pet-product/dog_img2.jpg';
import dog_img3 from '@/assets/images/pet-product/dog_img3.jpg';
import dog_img4 from '@/assets/images/pet-product/dog_img4.jpg';
import dog_img5 from '@/assets/images/pet-product/dog_img5.jpg';
import dog_img6 from '@/assets/images/pet-product/dog_img6.jpg';
import dog_img7 from '@/assets/images/pet-product/dog_img7.jpg';
import dog_img8 from '@/assets/images/pet-product/dog_img8.jpg';

import parrot_img1 from '@/assets/images/pet-product/parrot_img1.jpg';
import parrot_img2 from '@/assets/images/pet-product/parrot_img2.jpg';
import parrot_img3 from '@/assets/images/pet-product/parrot_img3.jpg';
import parrot_img4 from '@/assets/images/pet-product/parrot_img4.jpg';
import parrot_img5 from '@/assets/images/pet-product/parrot_img5.jpg';
import parrot_img6 from '@/assets/images/pet-product/parrot_img6.jpg';
import parrot_img7 from '@/assets/images/pet-product/parrot_img7.jpg';
import parrot_img8 from '@/assets/images/pet-product/parrot_img8.jpg';

import hamster_img1 from '@/assets/images/pet-product/hamster_img1.jpg';
import hamster_img2 from '@/assets/images/pet-product/hamster_img2.jpg';
import hamster_img3 from '@/assets/images/pet-product/hamster_img3.jpg';
import hamster_img4 from '@/assets/images/pet-product/hamster_img4.jpg';
import hamster_img5 from '@/assets/images/pet-product/hamster_img5.jpg';
import hamster_img6 from '@/assets/images/pet-product/hamster_img6.jpg';
import hamster_img7 from '@/assets/images/pet-product/hamster_img7.jpg';
import hamster_img8 from '@/assets/images/pet-product/hamster_img8.jpg';

import fish_img1 from '@/assets/images/pet-product/fish_img1.jpg';
import fish_img2 from '@/assets/images/pet-product/fish_img2.jpg';
import fish_img3 from '@/assets/images/pet-product/fish_img3.jpg';
import fish_img4 from '@/assets/images/pet-product/fish_img4.jpg';
import fish_img5 from '@/assets/images/pet-product/fish_img5.jpg';
import fish_img6 from '@/assets/images/pet-product/fish_img6.jpg';
import fish_img7 from '@/assets/images/pet-product/fish_img7.jpg';
import fish_img8 from '@/assets/images/pet-product/fish_img8.jpg';

import animal_img1 from '@/assets/images/pet-product/animal_img1.jpg';
import animal_img2 from '@/assets/images/pet-product/animal_img2.jpg';
import animal_img3 from '@/assets/images/pet-product/animal_img3.jpg';
import animal_img4 from '@/assets/images/pet-product/animal_img4.jpg';
import animal_img5 from '@/assets/images/pet-product/animal_img5.jpg';
import animal_img6 from '@/assets/images/pet-product/animal_img6.jpg';
import animal_img7 from '@/assets/images/pet-product/animal_img7.jpg';
import animal_img8 from '@/assets/images/pet-product/animal_img8.jpg';

export interface IPetCareArticle {
  items: string[];
  images: string[];
  content: ReactNode;
  price: number[];
}

export interface IPetCareCategory {
  img: string;
  name: string;
  state: IPetCareArticle;
}

export const articles: IPetCareArticle[] = [
  {
    items: [
      'Корм SAVITA беззерновой корм для котят с лососем и белой рыбой',
      'Когтеточка (35х35х48 см) с игрушкой бубенчиком и массажной щеткой для кошек',
      'Лежак круглый 40 см серый',
      'Sterilized Grain free Корм сухой для кастрированных котов и стерилизованных кошек в возрасте от 1 года до 7 лет, с курицей, 10 кг',
      'Когтеточка-доска (60х13х3 см) для вертикального или горизонтального крепления для кошек, серая',
      'Тоннель-мешок для кошек и собак мелких пород, 30x52 см, серый',
      'Игрушка для кошек Когтеточка динамическая клубок малый с ручкой',
      'Игрушка для кошек Барабан сизалевый 5х7 см',
    ],
    images: [cat_img1, cat_img2, cat_img3, cat_img4, cat_img5, cat_img6, cat_img7, cat_img8],
    price: [1349, 4399, 1399, 599, 399, 1699, 379, 299],
    content: <div>Товары для кошек</div>,
  },
  {
    items: [
      'Vet Life UltraHypo диетический сухой корм для собак, гипоаллергенный, 2кг',
      'Игрушка для собак Косточка веревка+дерево 30 см',
      'Veterinary Diets HA Hypoallergenic Сухой корм для снижения пищевой непереносимости ингредиентов и питательных веществ у взрослых собак, 3 кг',
      'Барс спрей для взрослых собак от блох и клещей, 200 мл',
      'Бассейн пластиковый для собак Cooling-Pool, 120х30 см, красный',
      'Игрушка для собак Кость прозрачная жевательная 13,5 см (2 шт)',
      'Игрушка для собак Черепаха, 14,5х14х5,5 см',
      'Ботинки резиновые на липучках для собак S черный (унисекс)',
    ],
    images: [dog_img1, dog_img2, dog_img3, dog_img4, dog_img5, dog_img6, dog_img7, dog_img8],
    price: [4485, 359, 6499, 735, 3977, 469, 449, 599],
    content: <div>Товары для собак</div>,
  },
  {
    items: [
      'Зерновая палочка для средних и крупных попугаев, с фруктами, 1 шт., 110 гр.',
      'Забавные качели для волнистых попугаев, 13х13х4см',
      'Камень минеральный для попугаев, 14 гр.',
      'Корм для волнистых попугаев 1кг',
      'Минеральная смесь для всех видов птиц, 520г',
      'Лестница для птиц натуральная деревянная, 28 см',
      'Зерновые палочки для попугаев Фрукты 3шт по 30гр',
      'Бисквиты для птиц с лесными ягодами 5х7 г',
    ],
    images: [
      parrot_img1,
      parrot_img2,
      parrot_img3,
      parrot_img4,
      parrot_img5,
      parrot_img6,
      parrot_img7,
      parrot_img8,
    ],
    price: [149, 275, 35, 317, 155, 179, 99, 155],
    content: <div>Товары для попугаев</div>,
  },
  {
    items: [
      'Клетка д/мелк грызунов 35,6x28x38,7см',
      'Клетка для мелких грызунов 58x32x41 см серая',
      'Наполнитель для грызунов кукурузный',
      'Гамак для грызунов 25*25см',
      'Дом для грызунов 14x13x14см',
      'Колесо для грызунов металл 13 см',
      'лакомство для грызунов Веточки Ассорти',
      'Лакомство для грызунов Малина сушенная, 15 гр.',
    ],
    images: [
      hamster_img1,
      hamster_img2,
      hamster_img3,
      hamster_img4,
      hamster_img5,
      hamster_img6,
      hamster_img7,
      hamster_img8,
    ],
    price: [2399, 4499, 649, 269, 299, 487, 97, 319],

    content: <div>Товары для хомяков</div>,
  },
  {
    items: [
      'Фильтр для аквариума, 5 Вт',
      'Авангард Грунт для аквариума Starfish стеклянный с сетке 26х26х19 мм',
      'Бочка 12*9*9,5см',
      'Min корм для рыб в хлопьях, 12 гр',
      'Автокормушка пластиковая для рыб, с программированием на 30 дней',
      'Растение шар зеленое 8*8*8см',
      'Корабль 27*9,5*16 см',
      'Растение-трава зеленое 8см',
    ],
    images: [
      fish_img1,
      fish_img2,
      fish_img3,
      fish_img4,
      fish_img5,
      fish_img6,
      fish_img7,
      fish_img8,
    ],
    price: [667, 219, 699, 105, 2145, 209, 1299, 59],

    content: <div>Товары для рыб</div>,
  },
  {
    items: [
      'ЗооVIP Гель для лошадей охлаждающий/разогревающий 500мл',
      'Минеральный MIX Са+природные белки для улиток 200г',
      'Светильник для террариума Classmark лампа для рептилий и черепах, ящериц и змей, на прищепке с таймером, мощность 75 Вт, 4 режима освещения, 2 галогенные лампы в комплекте',
      'Тотал витаминный комплекс с коэнзимом Q10 для кроликов, птиц и грызунов, 10 мл',
      'Террариум прямоугольный для черепах и рептилий, 25 л',
      'Плотик для черепах, L, 390*235*35мм',
      'Экзовит Функциональный корм для всех видов рептилий и амфибий 100мл',
      'Коврик греющий, 7Вт, 280*150мм',
    ],
    images: [
      animal_img1,
      animal_img2,
      animal_img3,
      animal_img4,
      animal_img5,
      animal_img6,
      animal_img7,
      animal_img8,
    ],
    price: [789, 199, 665, 227, 1849, 2189, 515, 1119],

    content: <div>Товары для других животных</div>,
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
