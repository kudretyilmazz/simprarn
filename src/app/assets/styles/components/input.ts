// Import React
import {StyleSheet} from 'react-native';

// Import Theme Type
import type {IStyleFileProp} from 'src/app/common/hooks/useStyles';

const inputStyles = ({}: IStyleFileProp) =>
  StyleSheet.create({
    wrapper: {
      alignSelf: 'stretch',
      rowGap: 4,
    },
    inputContainer: {
      height: 40,
      flexDirection: 'row',
    },
    input: {
      height: 40,
      flex: 1,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#666',
      paddingHorizontal: 8,
    },
    message: {
      color: 'red',
      paddingLeft: 4,
      fontSize: 12,
    },
  });

export default inputStyles;
