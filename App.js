import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
// Set up redux
// Provider is a component that wraps your app and makes the Redux store available to any nested components that need to access the Redux store. 
// Since any React component in a React Redux app can be connected to the store, most apps will render a <Provider> at the top level, 
// with the entire app’s component tree inside of it.
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen/>
      </SafeAreaProvider>
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
