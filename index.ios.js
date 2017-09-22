/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Articles from './src/views/Articles';

export default class ProjetoTesteNative extends Component {  
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: "Artigos",
          component:Articles
      }}/>                                
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,        
    flexDirection: 'column',    
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('ProjetoTesteNative', () => ProjetoTesteNative);
