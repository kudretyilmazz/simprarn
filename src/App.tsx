// Import Store
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@store/store';

// Import React Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

// Import Components
import NavigationContainer from '@components/navigation-container/NavigationContainer';

// Import Screens
import HomeScreen from '@screens/Home/HomeScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';

// Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
