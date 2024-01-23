// Import Store
import {useAppDispatch} from '@store/hooks';
import {setLoginStatus} from '@store/slices/user';

// Import Hooks
import useStyles from 'src/app/common/hooks/useStyles';

// Import Components
import ScreenWrapper from 'src/app/components/screen-wrapper/ScreenWrapper';
import Button from 'src/app/components/button/Button';

// Import Assets
import loginStyles from 'src/app/assets/styles/screens/login/loginStyles';

export default function LoginScreen() {
  // Variables
  const styles = useStyles(loginStyles);
  const dispatch = useAppDispatch();

  // Functions
  const login = () => {
    setTimeout(() => dispatch(setLoginStatus(true)), 300);
  };

  return (
    <ScreenWrapper style={styles.container}>
      <Button label="COMPONENTS.CTA.LOGIN" onPress={login} />
    </ScreenWrapper>
  );
}
