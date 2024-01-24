// Import Query Client
import type {QueryClientConfig} from '@tanstack/react-query';

const MINUTE = 1000 * 60;

const queryClientConfig: QueryClientConfig = {
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
};

export default queryClientConfig;
