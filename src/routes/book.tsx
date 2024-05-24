import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/book')({
  component: () => (
    <main className="container mx-auto mt-12">
      <div className="w-full rounded-[30px] bg-light-orange py-10 px-[90px]">
        <h1 className="text-center text-black text-[40px] font-normal">Make a meet</h1>
        <form className="mt-12 gap-8 flex flex-col items-center justify-center">
          <div className="grid w-full grid-cols-2 gap-x-[76px] gap-y-4">
            <div className="flex flex-col gap-4">
              <label className="ml-4 text-black text-base font-normal">Parent Name:</label>
              <input type="name" className="px-4 bg-white rounded-[10px] h-12" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="ml-4 text-black text-base font-normal">Pet Name:</label>
              <input type="name" className="px-4 bg-white rounded-[10px] h-12" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="ml-4 text-black text-base font-normal">Meet Date:</label>
              <input type="date" className="px-4 bg-white rounded-[10px] h-12" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="ml-4 text-black text-base font-normal">Pet Breed:</label>
              <input type="text" className="px-4 bg-white rounded-[10px] h-12" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="ml-4 text-black text-base font-normal">Phone Number:</label>
              <input type="tel" className="px-4 bg-white rounded-[10px] h-12" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="ml-4 text-black text-base font-normal">Symptoms and notes:</label>
              <input type="text" className="px-4 bg-white rounded-[10px] h-12" />
            </div>
          </div>
          <label className="flex items-center mb-4 gap-4">
            <Checkbox />
            <span className="text-black text-base font-normal">
              I have read and agree to the
              <span className="text-black text-base font-normal underline"> Privacy Policy</span>
            </span>
          </label>
          <Button variant="dark">Book Now</Button>
        </form>
      </div>
    </main>
  ),
});
