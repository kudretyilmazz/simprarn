// Import Date-fns
import {
  format,
  addDays,
  addMonths,
  addYears,
  subDays,
  subMonths,
  subYears,
  min,
  max,
  isBefore,
  isAfter,
  isSameDay,
  formatDistance,
} from 'date-fns';
import {enUS, tr} from 'date-fns/locale';

// Import Store
import {store} from '@store/store';

// Import Constants
import {LOCALES} from '@common/constants/locales';

const getDateLocale = () => {
  return store.getState().localization.locale === LOCALES.EN ? enUS : tr;
};

export const dateFormat = (date: Date, formatStr: string) => {
  return format(date, formatStr, {
    locale: getDateLocale(),
  });
};

export const addDay = (date: Date, count: number) => {
  return addDays(date, count);
};

export const addMonth = (date: Date, count: number) => {
  return addMonths(date, count);
};

export const addYear = (date: Date, count: number) => {
  return addYears(date, count);
};

export const subDay = (date: Date, count: number) => {
  return subDays(date, count);
};

export const subMonth = (date: Date, count: number) => {
  return subMonths(date, count);
};

export const subYear = (date: Date, count: number) => {
  return subYears(date, count);
};

export const findMinDate = (dates: Date[]) => {
  return min(dates);
};

export const findMaxDate = (dates: Date[]) => {
  return max(dates);
};

export const isBeforeDate = (date: Date, compareDate: Date) => {
  return isBefore(date, compareDate);
};

export const isAfterDate = (date: Date, compareDate: Date) => {
  return isAfter(date, compareDate);
};

export const isSameDayDates = (date: Date, secondDate: Date) => {
  return isSameDay(date, secondDate);
};

export const distanceFormat = (date: Date, baseDate: Date) => {
  return formatDistance(date, baseDate, {
    locale: getDateLocale(),
    addSuffix: true,
  });
};
