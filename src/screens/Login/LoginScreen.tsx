// Import Store
import {useAppDispatch} from '@store/hooks';
import {setLoginStatus} from '@store/slices/user';

// Import Hooks
import useStyles from '@common/hooks/useStyles';

// Import Components
import ScreenWrapper from '@components/screen-wrapper/ScreenWrapper';
import Button from '@components/button/Button';

// Import Assets
import loginStyles from '@assets/styles/screens/login/loginStyles';

export default function LoginScreen() {
  // Variables
  const styles = useStyles(loginStyles);
  const dispatch = useAppDispatch();

  // Functions
  const login = () => dispatch(setLoginStatus(true));
  return (
    <ScreenWrapper style={styles.container}>
      <Button label="COMPONENTS.CTA.LOGIN" onPress={login} />
    </ScreenWrapper>
  );
}
