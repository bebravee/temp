import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  loader: () => {
    throw redirect({
      to: '/about/$filter',
      params: {
        filter: 'all',
      },
    });
  },
});
