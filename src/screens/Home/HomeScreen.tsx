// Import Store
import {setTheme} from '@store/slices/theme';
import {useAppDispatch, useAppSelector} from '@store/hooks';

// Import Components
import View from '@components/view/View';
import Button from '@components/button/Button';

// Import Hooks
import useLocalization from '@common/hooks/useLocalization';
import useStyles from '@common/hooks/useStyles';

// Import Constants
import {LOCALES} from '@common/constants/localization/locales';
import {THEMES} from '@common/constants/theme/themes';

// Import Assets
import homeStyles from '@assets/styles/screens/home/homeStyles';

// Import i18n

export default function HomeScreen() {
  // Variables
  const styles = useStyles(homeStyles);
  const currentTheme = useAppSelector(store => store.theme.theme);
  const dispatch = useAppDispatch();
  const {changeLanguage, locale} = useLocalization();

  // Functions
  const changeTheme = () => {
    dispatch(
      setTheme(currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK),
    );
  };

  const changeLang = () =>
    changeLanguage(locale === LOCALES.TR ? LOCALES.EN : LOCALES.TR);

  return (
    <View style={styles.container}>
      <Button label="COMPONENTS.CTA.CHANGE_THEME" onPress={changeTheme} />
      <Button label="COMPONENTS.CTA.CHANGE_LANGUAGE" onPress={changeLang} />
    </View>
  );
}
