import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const responsiveHeight = (h: number): number => height * (h / 100);
export const responsiveWidth = (w: number): number => width * (w / 100);
export const WIDTH = (w: number): number => width * (w / 375);
export const HEIGHT = (h: number): number => height * (h / 812);
export const randomID = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
export const responsiveWidthComponent = (
  widthComponent: number,
  w: number,
): number => widthComponent * (w / 100);
export const responsiveFontFigmar = (f: number): number => f + 2;

export const getHeight = (): number => height;
export const getWidth = (): number => width;

export const getFont = (f: number): number => f;

export const getNumber = (val): number => {
  if (val && val !== null && val !== '') return parseFloat(val);
  else return 0;
};

export const getLineHeight = (f: number): number => f;

export const convertComma = (number: string | number) => {
  const newStringNumber = String(number);
  if (number === '' || !number) return 0;
  return parseFloat(newStringNumber?.replace(',', '.'));
};

export const getCurrentDate = date => {
  const dateStamp = new Date(date);
  // const TIME_GMT = -7 * 60 * 60 * 1000;
  const TIME_GMT = 0;

  const currentDate = new Date(dateStamp.getTime() + TIME_GMT).toISOString();
  return currentDate;
};
