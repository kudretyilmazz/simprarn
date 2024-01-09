// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from '@common/hooks/useStyles';

const textInputStyles = ({colors}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderRadius: 8,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      height: 40,
      borderRadius: 8,
      borderColor: colors.secondary,
      fontSize: 16,
      paddingHorizontal: 8,
      color: colors.secondary,
    },
  });

export default textInputStyles;
