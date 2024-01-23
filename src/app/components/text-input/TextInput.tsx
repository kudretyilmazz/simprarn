// Import React
import {TextInput as RNTextInput} from 'react-native';
import type {TextInputProps} from 'react-native';

// Import Components
import View from 'src/app/components/view/View';

// Import Hooks
import useStyles from 'src/app/common/hooks/useStyles';

// Import Assets
import textInputStyles from 'src/app/assets/styles/components/text-input/textInputStyles';

export default function TextInput(props: TextInputProps) {
  // Props Destruction
  const {style} = props;

  // Variables
  const styles = useStyles(textInputStyles);
  return (
    <View style={[style, styles.container]}>
      <RNTextInput {...props} style={styles.input} />
    </View>
  );
}
