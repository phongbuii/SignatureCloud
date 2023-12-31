import {DefaultTheme} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
    box: '#FFFFFF',
    border: '#EEEEEE',
    light: '#CCCCCC',
    line: '#D9DBE9',
    weak: '#999999',
    danger: '#FF3141',
    warning: '#FAAD14',
    success: '#52C41A',
    primary: '#0061A5',
    secondary: '#118AB2',
    backgroundPrimary: '#E6FFFB',
    textButton: 'rgba(255, 255, 255, 100)',
    textTitle: 'rgba(0, 0, 0, 0.85)',
    textPrimary: 'rgba(0, 0, 0, 0.65)',
    textSecondary: 'rgba(0, 0, 0, 0.45)',
    textDisable: 'rgba(0, 0, 0, 0.25)',
    magenta6: '#EB2F96',
    mask: 'rgba(0, 0, 0, 0.55)',
    calendulaGold5: '#FFC53D',
    calendulaGold1: '#FFFBE6',
    dustRed5: '#EF476F',
    dustRed6: '#FF4D4F',
    dustRed1: '#FFF1F0',
    goldenPurle6: '#722ED1',
    volcano1: '#FFF2E8',
    volcano5: '#FF7A45',
    goldenPurle1: '#F9F0FF',
    goldenPurle5: '#9254DE',
    backdrop: 'rgba(255, 255, 0255, 0.55)',
    paywallRhodamine: '#FB1AB8',
    paywallSalmon: '#F8C16D',
    sunsetOrange1: '#FFF7E6',
    sunsetOrange5: '#FFA940',
    linearSuccessStart: '#87E8DE',
    linearSuccessMiddle: '#A2EFE6',

    linearSuccessEnd: '#E6FFFB',
    linearErrorStart: '#FFA39E',
    linearErrorMiddle: '#F8BEBA',
    linearErrorEnd: '#EFF5F4',
    dayBreakBlue5: '#40A9FF',
    polarGreen5: '#73D13D',
    sunriseYellow5: '#FADB14',
    calendulaGold6: '#FAAD14',
    primaryDisable: '#87E8DE',
  },
};
export type IColorsTheme = typeof lightTheme.colors;
