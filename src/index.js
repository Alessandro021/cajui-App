import React from 'react';
import ContentView from './ContentView';
import { View, StyleSheet } from 'react-native';

export default function App() {

  return (
        
            <ContentView/>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
})