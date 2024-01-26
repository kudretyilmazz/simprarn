// Import React
import {Keyboard, TouchableWithoutFeedback, ViewProps} from 'react-native';

// Import Safe Context
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

// Import Hooks
import useStyles from '@common/hooks/useStyles';

// Import Components
import KeyboardShift from '@components/keyboard-shift/KeyboardShift';
import View from '@components/view/View';

// Import Assets
import screenWrapperStyles from '@assets/styles/components/screen-wrapper';

interface IScreenWrapper extends ViewProps {
  withoutPadding?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

function ScreenWrapper(props: IScreenWrapper) {
  // Props Destruction
  const {
    children,
    withoutPadding,
    style,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = props;

  // Variables
  const styles = useStyles(screenWrapperStyles);
  const insets = useSafeAreaInsets();
  const withoutPaddingStyle = {paddingHorizontal: 0, paddingVertical: 0};

  return (
    <KeyboardShift>
      <SafeAreaProvider
        style={{
          ...styles.flex,
          paddingTop: paddingTop ?? insets.top,
          paddingBottom: paddingBottom ?? insets.bottom,
          paddingLeft: paddingLeft ?? insets.left,
          paddingRight: paddingRight ?? insets.right,
        }}>
        <TouchableWithoutFeedback
          style={styles.flex}
          onPress={Keyboard.dismiss}>
          <View
            style={[
              styles.container,
              withoutPadding && withoutPaddingStyle,
              style && style,
            ]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaProvider>
    </KeyboardShift>
  );
}

export default ScreenWrapper;
