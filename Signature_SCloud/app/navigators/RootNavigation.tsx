import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { forwardRef } from 'react';
import { enableScreens } from 'react-native-screens';
import Login from '../screens/Authentication/Login';
import { navigationRef } from './NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import { Platform } from 'react-native';
import { TransitionPresets } from '@react-navigation/stack';

enableScreens(false);
const rootStack = createNativeStackNavigator();
const NavigatorContainer = () => {
  const routeNameRef = React.useRef<string>();
  const isLoggedIn = false;
  const initialRouterName = isLoggedIn ? 'Home' : 'Login';
  const TransitionPreset =
    Platform.OS === 'ios' ? TransitionPresets.ModalSlideFromBottomIOS : {};
  const navigationOptions = {
    headerShown: false,
    ...TransitionPreset,
    animation: 'slide_from_right',
    gestureEnabled: false,
    cardStyle: {},
    cardOverlayEnabled: true,
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <rootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRouterName}>
        <rootStack.Screen name="Login" component={Login} />
        <rootStack.Screen name="Home" component={Home} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
};
export default NavigatorContainer;
