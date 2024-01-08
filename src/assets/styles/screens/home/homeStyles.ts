// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from '@common/hooks/useStyles';

const homeStyles = ({colors}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      rowGap: 16,
    },
  });

export default homeStyles;
