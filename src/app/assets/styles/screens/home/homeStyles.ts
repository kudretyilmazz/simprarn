// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from 'src/app/common/hooks/useStyles';

const homeStyles = ({}: IStyleFileProp) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: 16,
    },
  });

export default homeStyles;
