// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from '@common/hooks/useStyles';

const buttonStyles = ({}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#f7f7f7',
      borderRadius: 16,
      textAlign: 'center',
    },
    label: {
      fontWeight: '500',
    },
  });

export default buttonStyles;
