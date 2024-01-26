// Import React
import {TextInput, TextInputProps, Text} from 'react-native';

// Import Hooks
import useStyles from '@common/hooks/useStyles';

// Impor Components
import View from '@components/view/View';

// Import Assets
import inputStyles from '@assets/styles/components/input';

// Import Type
import type {FormControlType} from '@common/hooks/useForm';

interface IInput extends TextInputProps {
  name: string;
  control: FormControlType;
}

export default function Input(props: IInput) {
  // Props Destruction
  const {name, control} = props;
  const {onChange, values, errors} = control;

  // Variables
  const styles = useStyles(inputStyles);

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          value={values?.[name]}
          onChangeText={val => onChange(name, val)}
          style={styles.input}
          {...props}
        />
      </View>
      {errors?.[name] && <Text style={styles.message}>{errors?.[name]}</Text>}
    </View>
  );
}
