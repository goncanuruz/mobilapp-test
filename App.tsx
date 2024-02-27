import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationProvider from './src/navigators/tabs';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './src/redux';
import {Provider} from 'react-redux';
import ModalProvider from './src/providers/ModalProvider';

let persistor = persistStore(store);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ModalProvider>
          <NavigationProvider />
        </ModalProvider>
      </Provider>
    </PersistGate>
  );
}

export default App;
