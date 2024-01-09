// Import React
import {useRef, useEffect} from 'react';

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
import {THEMES} from '@common/constants/theme/themes';

// Import Screens
import LoginScreen from './Login/LoginScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';

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
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const navigator: any = useRef(null);
  const navigationTheme =
    currentTheme === THEMES.LIGHT ? DefaultTheme : DarkTheme;

  // useEffects
  useEffect(() => {
    const currentRoute = navigator?.current?.getCurrentRoute();

    console.log(navigator?.current);

    if (currentRoute?.name === 'Login' && isLoggedIn) {
      navigator?.current?.navigate('Home');
    }

    if (currentRoute?.name !== 'Login' && !isLoggedIn) {
      navigator?.current?.navigate('Login');
    }
  }, [isLoggedIn]);

  return (
    <NavigationContainer ref={navigator} theme={navigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn && (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
