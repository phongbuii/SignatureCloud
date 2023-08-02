import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigatorContainer from './navigators/RootNavigation';
import { setLangInApp } from './i18n';
import SplashScreen from 'react-native-splash-screen';
import { PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './theme';
const App = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(true);
  const [isDefaultSystem, setIsDefaultSystem] = React.useState(false);
  useEffect(() => {
    setLangInApp();
  }, []);
  useEffect(() => {
    const timeCloseSplash = setTimeout(() => SplashScreen.hide(), 1000);
    return () => {
      clearTimeout(timeCloseSplash);
    };
  }, []);
  const theme = isThemeDark ? lightTheme : darkTheme;
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigatorContainer />
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
