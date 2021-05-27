import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navigation} from "./src/naviagation/navigation";
import {Provider} from "react-redux";
import store from "./src/store/store";

export default function App() {
  return (
      <Provider store={store}>
    <View style={styles.container}>
      <Navigation/>
    </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }

});
