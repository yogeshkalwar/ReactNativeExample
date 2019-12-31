import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function FlexBoxExample() {
  return (
    <View style={styles.screen}>
      <View style={styles.child, {
        backgroundColor:'red'}}>
          <Text>1</Text>
      </View>
      <View style={styles.child, {
        backgroundColor:'blue'}}>
          <Text>2</Text>
      </View>
      <View style={styles.child, {
        backgroundColor:'green'}}>
          <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50, 
    flexDirection:'row', 
    width:'100%', 
    height:300, 
    justifyContent:'space-between',
  },
  child: {
    flex:1,
    alignItems:'stretch'
  }
});