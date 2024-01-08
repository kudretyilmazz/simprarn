// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from '@common/hooks/useStyles';

const screenWrapperStyles = ({}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      flex: 1,
    },
  });

export default screenWrapperStyles;
