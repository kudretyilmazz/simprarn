// Import React
import type {StyleProp} from 'react-native';

// Import Store
import {useAppSelector} from '@store/hooks';

// Import Design
import {colors} from '@common/design/colors';
import type {TypeColors} from '@common/design/colors';

// Import Constants
import {THEMES} from '@common/constants/theme/themes';

export interface IStyleFileProp {
  colors: Record<TypeColors, string>;
  theme: THEMES;
}

type TypeStyleFile = (props: IStyleFileProp) => StyleProp<any>;

export default function useStyles(style: TypeStyleFile) {
  // Variables
  const currentTheme = useAppSelector(store => store.theme.theme);

  return style({
    colors,
    theme: currentTheme,
  });
}
