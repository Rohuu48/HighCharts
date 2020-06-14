import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
