import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Prueba from './Prueba';

function App() {
  return (
    <Provider store={store}>
      <Prueba />
    </Provider>
  );
}

export default App;
