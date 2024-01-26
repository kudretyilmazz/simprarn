// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from 'src/app/common/hooks/useStyles';

const buttonStyles = ({colors}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingVertical: 12,
      backgroundColor: colors.primary,
      borderRadius: 16,
      textAlign: 'center',
    },
    label: {
      fontWeight: '500',
      color: colors.white,
      fontSize: 18,
      textAlign: 'center',
    },
  });

export default buttonStyles;
