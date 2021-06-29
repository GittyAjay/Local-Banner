import 'react-native-gesture-handler';
import * as React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import { AppNavigator } from './navigation/app'
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
export default function App() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
  )
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}


