// Import Store
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@store/store';

// Import React Navigation
import 'react-native-gesture-handler';

// Import App Screens
import AppScreens from './screens';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppScreens />
      </PersistGate>
    </Provider>
  );
}

export default App;
