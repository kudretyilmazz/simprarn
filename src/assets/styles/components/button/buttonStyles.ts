// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from '@common/hooks/useStyles';

const buttonStyles = ({colors}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: colors.primary,
      borderRadius: 16,
      textAlign: 'center',
    },
    label: {
      fontWeight: '500',
      color: colors.white,
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default buttonStyles;
