// App.js

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import NavStack from './NavStack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/redux/reducers/index';


const store = createStore(rootReducer);

export default function App() {
  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>

  );
}

// console.disableYellowBox = true;
