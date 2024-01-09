// Import React
import {TextInput as RNTextInput} from 'react-native';
import type {TextInputProps} from 'react-native';

// Import Components
import View from '@components/view/View';

// Import Hooks
import useStyles from '@common/hooks/useStyles';

// Import Assets
import textInputStyles from '@assets/styles/components/text-input/textInputStyles';

export default function TextInput(props: TextInputProps) {
  // Props Desturction
  const {style} = props;

  // Variables
  const styles = useStyles(textInputStyles);
  return (
    <View style={[style, styles.container]}>
      <RNTextInput {...props} style={styles.input} />
    </View>
  );
}
