// Import React Navigation
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import Store
import {useAppSelector} from '@store/hooks';

// Import Constants
import {THEMES} from 'src/app/common/constants/theme/themes';

// Import Screens
import LoginScreen from './Login/LoginScreen';
import HomeScreen from 'src/app/views/Home/HomeScreen';
import ProfileScreen from 'src/app/views/Profile/ProfileScreen';

// Navigator Type
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
};

// Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppScreens() {
  // Variables
  const currentTheme = useAppSelector(state => state.theme.theme);
  const isLoggedIn = useAppSelector(state => state.user?.isLoggedIn);
  const navigationTheme =
    currentTheme === THEMES.LIGHT ? DefaultTheme : DarkTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        {isLoggedIn === false ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
