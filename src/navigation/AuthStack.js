import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from '../screens/auth/RegistrationScreen';


import asd from '../components/UI/AppInput';

function LoginScreenPlaceholder() { return null; } // replace later

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Register" component={asd} /> */}
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreenPlaceholder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
