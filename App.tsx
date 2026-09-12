/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashView from './SplashView';
import OnboardingView from './OnboardingView';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import EnterYourDetialsView from './EnterYourDetialsView';
import ForgetPasswordView from './ForgetPasswordView';
import ResetPasswordView from './ResetPasswordView';

const Stack = createNativeStackNavigator();
function App() {
  const isDarkMode = useColorScheme() === 'dark';

   return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="splash" component={SplashView} />
        <Stack.Screen name="onboard" component={OnboardingView} />
        <Stack.Screen name="login" component={LoginView} />
        <Stack.Screen name="register" component={RegisterView} />
        <Stack.Screen name="forgetpassword" component={ForgetPasswordView} />
        <Stack.Screen name="enteryourdetail" component={EnterYourDetialsView} />
        <Stack.Screen name="resetpassword" component={ResetPasswordView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
