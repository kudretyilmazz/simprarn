// Import React
import {View as RNView} from 'react-native';
import type {ViewProps} from 'react-native';

export default function View(props: ViewProps) {
  return <RNView {...props} />;
}
