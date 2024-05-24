import { createFileRoute } from '@tanstack/react-router';
import Search from '@/components/about/Search';
import AssistantsList from '@/components/about/AssistantsList';

export const Route = createFileRoute('/about/$filter')({
  component: () => (
    <div className="flex flex-col gap-16">
      <Search />
      <AssistantsList />
    </div>
  ),
});
