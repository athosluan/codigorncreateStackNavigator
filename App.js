/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import Routes from './routes/routes';
import Welcome from './routes/pages/welcome/welcome';

export default class App extends Component {

  render() {
    return (
      <View>
        <Text>Ola</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont1: {
    flex: 1,
    backgroundColor: '#F00',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  cont2: {
    flex: 1,
    backgroundColor: '#F38',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
