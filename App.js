import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ItemListingScreen from './src/screens/ItemListingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'login'}>

      <Stack.Screen name={'login'} component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name={'signUp'} component={SignUpScreen} options={{headerShown: false}}/>
      <Stack.Screen name={'itemList'} component={ItemListingScreen} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}