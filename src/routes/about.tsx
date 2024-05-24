import { createFileRoute, Outlet } from '@tanstack/react-router';
import Dog1 from '@/assets/images/dog-1.png';

export const Route = createFileRoute('/about')({
  component: () => (
    <main className="container mx-auto">
      <div className="flex h-64 justify-center items-center relative">
        <img src={Dog1} alt="dog" className="left-64 -top-5 absolute" />
        <div className="bg-main rounded-[70px] border border-neutral-500 py-4 px-9">
          <h1 className="h-20 text-center text-black text-[64px] font-normal">Наша команда</h1>
        </div>
      </div>
      <Outlet />
    </main>
  ),
});
