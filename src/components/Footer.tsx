import Facebook from '@/assets/facebook.png';
import TikTok from '@/assets/tiktok.png';
import Insta from '@/assets/insta.png';
import Input from './Input';
import Button from './Button';

const Footer = () => {
  const socials = [Facebook, TikTok, Insta];

  return (
    <footer className="py-5">
      <div className="container mx-auto px-10">
        <span className="text-black text-base font-normal">заботьтесь о своих питомцах!</span>
        <div className="mt-9 flex justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-black text-base font-normal">Дружите с нами</span>
            <div className="flex gap-2">
              {socials.map((social) => (
                <img src={social} key={social} alt={social} />
              ))}
            </div>
          </div>
          <form className="flex flex-col gap-8">
            <div className="flex items-end gap-10">
              <div className="flex flex-col gap-4">
                <label className="ml-4">Почтовый ящик</label>
                <Input className="w-[235px]" />
              </div>
              <Button>Отправить</Button>
            </div>
            <span className="text-black text-base font-normal text-right">
              © {new Date().getFullYear()} «SmartCare»
            </span>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
