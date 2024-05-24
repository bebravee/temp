import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NotFound from '@/components/NotFound';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  notFoundComponent: () => <NotFound />,
  errorComponent: () => <NotFound />,
  component: () => (
    <>
      <div className="min-h-screen z-0">
        <div className="h-[140px] z-20">
          <Header />
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  ),
});
