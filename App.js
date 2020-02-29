/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './src/navigator/AppNavigator'
import { Provider } from 'react-redux';
import { storeFactory } from './src/flux/store/Store';


const App = () => {
  return (
    <>
      <Provider store={storeFactory}>
        <PaperProvider >
          <StatusBar barStyle="light-content" backgroundColor="#4d7bf3" />
          <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <AppNavigator />
          </SafeAreaView>
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
