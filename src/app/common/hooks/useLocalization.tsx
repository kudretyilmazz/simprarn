// Import Redux
import {useAppSelector, useAppDispatch} from '@store/hooks';
import {setLocale} from '@store/slices/localization';

// Import Constants
import {LOCALES} from '@common/constants/locales';

// Import Locales
import tr from '../localization/tr.json';
import en from '../localization/en.json';

export default function useLocalization() {
  // Variables
  const dispatch = useAppDispatch();
  const locale = useAppSelector(state => state.localization.locale);
  const dictionary: any = LOCALES.TR === locale ? tr : en;

  // Functions
  const translate = (path: string | undefined, params?: string[]) => {
    if (typeof path === 'undefined') {
      return null;
    }

    let result: any;
    const pathArr = path.split('.');

    pathArr.forEach((pth: string, index) => {
      if (index === 0) {
        result = dictionary[pth];
        return;
      }

      result = result[pth];
    });

    if (params) {
      params?.forEach((param, paramIndex) => {
        result = result?.toString()?.replace(`{${paramIndex + 1}}`, param);
      });
    }

    return result;
  };

  const changeLanguage = (newLocale: LOCALES) => dispatch(setLocale(newLocale));

  return {translate, changeLanguage, locale};
}
