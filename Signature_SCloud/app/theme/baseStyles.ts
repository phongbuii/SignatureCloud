import {fontweight} from './../components/text/text.presets';
import {Platform} from 'react-native';
import {getFont, getLineHeight} from '../config/functions';
import R from '../assets';
export const shadow = {
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(193, 207, 217, 0.2)',
      shadowOpacity: 0.25,
      shadowRadius: 14,
      shadowOffset: {height: 5, width: 0},
      zIndex: 1,
    },
    android: {
      elevation: 0.8,
    },
  }),
};

export const styleTextBaseAntd = {
  M3: {
    fontFamily: R.fonts.Manrope,
    fontSize: getFont(28),
    lineHeight: getLineHeight(36),
    color: R.colors.textTitle,
    fontWeight: '700',
  },
  H1: {
    fontFamily: R.fonts.RobotoMedium,
    fontSize: getFont(38),
    lineHeight: getLineHeight(46),
    color: R.colors.textTitle,
  },
  H2: {
    fontFamily: R.fonts.RobotoMedium,
    fontSize: getFont(30),
    lineHeight: getFont(40),
    color: R.colors.textTitle,
  },
  H3: {
    fontFamily: R.fonts.RobotoRegular,
    fontSize: getFont(24),
    lineHeight: getFont(32),
    color: R.colors.textTitle,
  },
  H4: {
    fontFamily: R.fonts.RobotoMedium,
    fontSize: getFont(20),
    lineHeight: getFont(28),
    color: R.colors.textTitle,
  },
  H5: {
    fontFamily: R.fonts.RobotoMedium,
    fontSize: getFont(16),
    lineHeight: getFont(24),
    color: R.colors.textTitle,
  },
  Body: {
    fontFamily: R.fonts.RobotoRegular,
    fontSize: getFont(14),
    lineHeight: getFont(22),
    color: R.colors.textTitle,
  },
  Footnote: {
    fontFamily: R.fonts.Roboto,
    fontSize: getFont(12),
    lineHeight: getFont(20),
    color: R.colors.textTitle,
  },
  FootDes: {
    fontFamily: R.fonts.Roboto,
    fontSize: getFont(10),
    lineHeight: getFont(18),
    color: R.colors.textTitle,
  },
  M3_Large: {
    fontFamily: R.fonts.Roboto,
    fontSize: getFont(22),
    lineHeight: getFont(28),
    color: R.colors.textTitle,
  },
};
