import { DefaultTheme } from '@react-navigation/native';
import { backgroundPrimary, themePrimary, themeSecondary } from '@src/theme/Theme';

export const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: themePrimary,
    text: themeSecondary,
    background: backgroundPrimary,
  },
};

export const SecondaryTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#0000AE',
    text: themeSecondary,
    background: backgroundPrimary,
  },
}