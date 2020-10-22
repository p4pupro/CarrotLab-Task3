import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './navigation';
import { AppearanceProvider } from 'react-native-appearance';
import  './constants/Locale';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <AppearanceProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar/>
        </AppearanceProvider>
      </Provider>
    );
  }
}
