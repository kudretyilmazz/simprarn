// Import Domain
import {useLogin} from 'src/app/domain/account/queries';

// Import Hooks
import useStyles from '@common/hooks/useStyles';
import useForm from '@common/hooks/useForm';

// Import Zod
import {z} from 'zod';

// Import Components
import ScreenWrapper from 'src/app/components/screen-wrapper/ScreenWrapper';
import Button from 'src/app/components/button/Button';
import Input from '@components/input/Input';

// Import Assets
import loginStyles from 'src/app/assets/styles/screens/login/loginStyles';

export default function LoginScreen() {
  // Variables
  const styles = useStyles(loginStyles);
  const login = useLogin();

  const {control, handleSubmit} = useForm({
    schema: z.object({
      email: z.string().email(),
      password: z.string().min(3),
    }),
  });

  // Functions
  const handleLogin = (formData: any) => {
    login.mutate(formData);
  };

  return (
    <ScreenWrapper style={styles.container}>
      <Input
        name="email"
        inputMode="email"
        keyboardType="email-address"
        control={control}
      />
      <Input name="password" secureTextEntry control={control} />
      <Button
        label="COMPONENTS.CTA.LOGIN"
        onPress={() => handleSubmit(handleLogin)}
        isLoading={login.isPending}
      />
    </ScreenWrapper>
  );
}
