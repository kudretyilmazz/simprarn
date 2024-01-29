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
import {THEMES} from '@common/constants/themes';

// Import Screens
import LoginScreen from '@views/Login/LoginScreen';
import HomeScreen from '@views/Home/HomeScreen';
import ProfileScreen from '@views/Profile/ProfileScreen';

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
  const isLoggedIn = useAppSelector(state => state.user?.accessToken);
  const navigationTheme =
    currentTheme === THEMES.LIGHT ? DefaultTheme : DarkTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{gestureEnabled: true}}>
        {isLoggedIn === null ? (
          <Stack.Screen
            name="Login"
            options={{
              animationTypeForReplace: !isLoggedIn ? 'pop' : 'push',
            }}
            component={LoginScreen}
          />
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
