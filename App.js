import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
// Provider is a component that wraps your app and makes the Redux store available to any nested components that need to access the Redux store. 
// Since any React component in a React Redux app can be connected to the store, most apps will render a <Provider> at the top level, 
// with the entire app’s component tree inside of it.
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; //provider like wrapper over everything
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() { 

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name = 'MapScreen' component={MapScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
          {/* <HomeScreen/> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
