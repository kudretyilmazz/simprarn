import {QueryClient} from '@tanstack/react-query';

const MINUTE = 1000 * 60;

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MINUTE * 5,
      gcTime: MINUTE * 10,
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      gcTime: MINUTE * 5,
      retry: false,
    },
  },
});

export default queryClient;
