import { createFileRoute } from '@tanstack/react-router';
import GoogleLogo from '@/assets/images/google.png';
import Button from '@/components/Button';
import Pet from '@/assets/images/pet.png';

export const Route = createFileRoute('/login')({
  component: () => (
    <main className="mt-10 container mx-auto">
      <div className="w-full rounded-[30px] bg-light-orange grid grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-black text-[64px] font-normal">Hi there!</h1>
          <p className="h-7 text-center text-black text-base font-normal">
            Welcome to SmartCare. Community Dashboard
          </p>
          <form className="w-96 flex flex-col gap-6">
            <button className="rounded-[10px] border-2 w-full border-white flex items-center justify-center active:bg-white/30 duration-300 active:-translate-y-1 gap-4 py-3 px-4">
              <img src={GoogleLogo} alt="Google" /> Log in with Google
            </button>
            <div className="flex items-center">
              <div className="h-[1px] w-full mx-6 bg-black" />
              <span className="text-center text-black text-base font-normal">or</span>
              <div className="h-[1px] w-full mx-6 bg-black" />
            </div>
            <input
              className="rounded-[10px] bg-transparent border-2 w-full border-white flex items-center justify-center active:bg-white/30 duration-300 active:-translate-x-1 gap-4 py-3 px-4"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="rounded-[10px] bg-transparent border-2 w-full border-white flex items-center justify-center active:bg-white/30 duration-300 active:-translate-x-1 gap-4 py-3 px-4"
              type="password"
              placeholder="Password"
            />
            <Button variant="dark">Log in</Button>
            <p className="text-center text-black text-base font-normal">
              Don’t have an account? <span className="text-shop">Sign up</span>
            </p>
          </form>
        </div>
        <div className="flex justify-end">
          <img src={Pet} alt="Pet" />
        </div>
      </div>
    </main>
  ),
});
