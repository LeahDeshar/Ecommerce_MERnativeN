import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from './screens/About';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';

const Stack =createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='home' component={Home} options={{
            headerShown: false,
        }}/>
        <Stack.Screen name='productDetails' component={ProductDetails}/>
        <Stack.Screen name='mobile' component={About}/>

    </Stack.Navigator>
</NavigationContainer>
  );
}
