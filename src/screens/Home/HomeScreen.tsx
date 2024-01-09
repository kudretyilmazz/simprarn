// Import React Navigation
import {useNavigation, NavigationProp} from '@react-navigation/native';

// Import Store
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {setTheme} from '@store/slices/theme';
import {setLoginStatus} from '@store/slices/user';

// Import Components
import View from '@components/view/View';
import Button from '@components/button/Button';
import ScreenWrapper from '@components/screen-wrapper/ScreenWrapper';

// Import Hooks
import useLocalization from '@common/hooks/useLocalization';
import useStyles from '@common/hooks/useStyles';

// Import Constants
import {LOCALES} from '@common/constants/localization/locales';
import {THEMES} from '@common/constants/theme/themes';

// Import Assets
import homeStyles from '@assets/styles/screens/home/homeStyles';

// Navigator Types
import {RootStackParamList} from '../index';
type TypeNavigation = NavigationProp<RootStackParamList>;

export default function HomeScreen() {
  // Variables
  const styles = useStyles(homeStyles);
  const currentTheme = useAppSelector(store => store.theme.theme);
  const dispatch = useAppDispatch();
  const {changeLanguage, locale} = useLocalization();
  const navigation = useNavigation<TypeNavigation>();

  // Functions
  const changeTheme = () => {
    dispatch(
      setTheme(currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK),
    );
  };

  const changeLang = () =>
    changeLanguage(locale === LOCALES.TR ? LOCALES.EN : LOCALES.TR);

  const pushSettings = () => navigation.navigate('Profile');

  const logout = () => dispatch(setLoginStatus(false));

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Button label="COMPONENTS.CTA.CHANGE_THEME" onPress={changeTheme} />
        <Button label="COMPONENTS.CTA.CHANGE_LANGUAGE" onPress={changeLang} />
        <Button label="COMPONENTS.CTA.PROFILE" onPress={pushSettings} />
        <Button label="COMPONENTS.CTA.LOGOUT" onPress={logout} />
      </View>
    </ScreenWrapper>
  );
}
