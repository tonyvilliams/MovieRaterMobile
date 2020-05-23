import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View>
        <Text>{movie.title}</Text>
          <View style={styles.starContainer}>
            <FontAwesomeIcon style={movie.avg_rating > 0 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 1 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 2 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 3 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 4 ? styles.orange : styles.white  } icon={faStar}/>
            <Text>({movie.no_of_ratings})</Text>
          </View>
            <Text>{movie.description}</Text>
        </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35'
  },
  itemText: {
    color: '#fff',
    fontSize: 24
  },
  starContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  orange: {
    color: 'orange'
  },
  while: {
    color: 'white'
  }
});
