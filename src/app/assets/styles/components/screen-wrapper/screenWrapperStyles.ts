// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from 'src/app/common/hooks/useStyles';

const screenWrapperStyles = ({}: IStyleFileProp) =>
  StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
  });

export default screenWrapperStyles;
