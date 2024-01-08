// Import React
import {Keyboard, TouchableWithoutFeedback, ViewProps} from 'react-native';

// Import Hooks
import useStyles from '@common/hooks/useStyles';

// Import Components
import KeyboardShift from '@components/keyboard-shift/KeyboardShift';

// Import Assets
import screenWrapperStyles from '@assets/styles/components/screen-wrapper/screenWrapperStyles';

interface IScreenWrapper extends ViewProps {
  withoutPadding?: boolean;
}

function ScreenWrapper(props: IScreenWrapper) {
  // Props Destruction
  const {children, withoutPadding, style} = props;

  // Variables
  const styles = useStyles(screenWrapperStyles);
  const withoutPaddingStyle = {paddingHorizontal: 0, paddingVertical: 0};

  return (
    <KeyboardShift>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={[
          styles.container,
          withoutPadding && withoutPaddingStyle,
          style && style,
        ]}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardShift>
  );
}

export default ScreenWrapper;
