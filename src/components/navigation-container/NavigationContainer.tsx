// Import React Navigation
import {
  NavigationContainer as RNNavigationContainer,
  NavigationContainerProps,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

// Import Store
import {useAppSelector} from '@store/hooks';

// Import Constants
import {THEMES} from '@common/constants/theme/themes';

export default function NavigationContainer(props: NavigationContainerProps) {
  // Variables
  const currentTheme = useAppSelector(state => state.theme.theme);
  const navigationTheme =
    currentTheme === THEMES.LIGHT ? DefaultTheme : DarkTheme;
  return <RNNavigationContainer theme={navigationTheme} {...props} />;
}
