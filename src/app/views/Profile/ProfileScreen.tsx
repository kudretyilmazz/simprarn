// Import React Navigation
import {useNavigation, NavigationProp} from '@react-navigation/native';

// Import Components
import ScreenWrapper from 'src/app/components/screen-wrapper/ScreenWrapper';
import Button from 'src/app/components/button/Button';

// Navigator Types
import {RootStackParamList} from '../index';
type TypeNavigation = NavigationProp<RootStackParamList>;

export default function ProfileScreen() {
  // Variables
  const navigation = useNavigation<TypeNavigation>();

  return (
    <ScreenWrapper>
      <Button
        label="COMPONENTS.CTA.GO_BACK"
        onPress={() => navigation.goBack()}
      />
    </ScreenWrapper>
  );
}
