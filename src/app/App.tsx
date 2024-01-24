// Import Store
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@store/store';

// Import React Query
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@queryclient/QueryClient';

// Import Gesture Handler
import 'react-native-gesture-handler';

// Import App Screens
import Views from '@views/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Views />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
