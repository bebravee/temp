import ServicesList from '@/components/services/ServicesList';
import { createFileRoute } from '@tanstack/react-router';
import Paws from '@/assets/images/paws.png';

export const Route = createFileRoute('/services')({
  component: () => (
    <main className="container mx-auto mt-8">
      <div className="bg-service px-5 py-14 rounded-[70px] relative">
        <img src={Paws} alt="paws" className="absolute top-12 right-16" />
        <ServicesList />
      </div>
    </main>
  ),
});
