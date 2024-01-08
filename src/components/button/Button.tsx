// Import React
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

// Import Hooks
import useStyles from '@common/hooks/useStyles';
import useLocalization from '@common/hooks/useLocalization';

// Import Assets
import buttonStyles from '@assets/styles/components/button/buttonStyles';

interface IButton extends TouchableOpacityProps {
  label: string;
}

export default function Button(props: IButton) {
  // Props Destruction
  const {label} = props;

  // Variables
  const {translate} = useLocalization();
  const styles = useStyles(buttonStyles);

  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.label}>{translate(label) || label}</Text>
    </TouchableOpacity>
  );
}
