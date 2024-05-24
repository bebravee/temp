import Assistant1 from '@/assets/images/assistant-1.png';
import Assistant2 from '@/assets/images/assistant-2.png';
import Assistant3 from '@/assets/images/assistant-3.png';
import Assistant4 from '@/assets/images/assistant-4.png';
import Assistant5 from '@/assets/images/assistant-5.png';
import Assistant6 from '@/assets/images/assistant-6.png';
import { IAssistant, TSpecialty } from '@/components/about/AssistantCard';

const specialties: TSpecialty[] = [
  'veterinarians',
  'cynologists',
  'dogs-handlers',
  'pet-groomers',
  'vet-assistants',
  'vet-nurses',
];

const images = [Assistant1, Assistant2, Assistant3, Assistant4, Assistant5, Assistant6];

const firstNames = [
  'John',
  'Jane',
  'Mary',
  'Michael',
  'Emily',
  'David',
  'Sarah',
  'William',
  'Elizabeth',
  'James',
];
const lastNames = [
  'Smith',
  'Johnson',
  'Brown',
  'Davis',
  'Wilson',
  'Miller',
  'Taylor',
  'Anderson',
  'Jackson',
  'Thomas',
];

export const assistants: IAssistant[] = [
  {
    name: 'Mariam Okropiridze',
    img: images[0],
    specialty: specialties[0],
  },
  {
    name: 'Natalia Gagloevi',
    img: images[1],
    specialty: specialties[1],
  },
  {
    name: 'Nita Maisuradze',
    img: images[2],
    specialty: specialties[2],
  },
  {
    name: 'Tornike Ghonghadze',
    img: images[3],
    specialty: specialties[3],
  },
  {
    name: 'Vakho Babutsidze',
    img: images[4],
    specialty: specialties[4],
  },
  {
    name: 'Matilda Kasradze',
    img: images[5],
    specialty: specialties[5],
  },
  ...Array.from({ length: 100 }, () => ({
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    specialty: specialties[Math.floor(Math.random() * specialties.length)],
    img: images[Math.floor(Math.random() * images.length)],
  })),
];
