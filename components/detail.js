import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default function Detail() {



  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View>
        <Text>Details will be listed here</Text>
        </View>
    </SafeAreaView>
  );

};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item:{
//     flex: 1,
//     padding: 10,
//     height: 50,
//     backgroundColor: '#282C35'
//   },
//   itemText: {
//     color: '#fff',
//     fontSize: 24

//   }
// });