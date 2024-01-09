// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from '@common/hooks/useStyles';

const loginStyles = ({}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: 16,
    },
  });

export default loginStyles;
