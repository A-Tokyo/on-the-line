/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from './Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './app/redux/reducers.js';


//create Redux store
let store = createStore(reducer);


class Project extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('Project', () => Project);
