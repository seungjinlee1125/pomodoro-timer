import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/timer';
import reducer from './reducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});