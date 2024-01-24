// Import React Query
import {QueryClient} from '@tanstack/react-query';

// Import Config
import queryClientConfig from '@config/query-client/query-client-config';

// Create a client
const queryClient = new QueryClient(queryClientConfig);

export default queryClient;
