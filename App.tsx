import { useCallback } from 'react';
import {GluestackUIProvider, config, Image} from '@gluestack-ui/themed';
import WelcomeScreen from './components/WelcomeScreen'
import GetStarted from './components/GetStarted';
import SignInPage from './components/SignInPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
//SplashScreen.preventAutoHideAsync();
export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded, fontError] = useFonts({
    'ir-black': require('./assets/fonts/Inter-Black.ttf'),
    'ir-bold': require('./assets/fonts/Inter-Bold.ttf'),
    'ir-extra-bold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'ir-extra-light': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'ir-light': require('./assets/fonts/Inter-Light.ttf'),
    'ir-medium': require('./assets/fonts/Inter-Medium.ttf'),
    'ir-regular': require('./assets/fonts/Inter-Regular.ttf'),
    'ir-semi-bold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'ir-thin': require('./assets/fonts/Inter-Thin.ttf')
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <NavigationContainer>
    <GluestackUIProvider config={config.theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='GetStarted' component={GetStarted}/>
        <Stack.Screen name='SignInPage' component={SignInPage}/>
      </Stack.Navigator>
    </GluestackUIProvider>
  </NavigationContainer>
  );
}