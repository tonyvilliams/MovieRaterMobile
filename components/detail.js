import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        {/* <Text>{movie.title}</Text> */}
          <View style={styles.starContainer}>
            <FontAwesomeIcon style={movie.avg_rating > 0 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 1 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 2 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 3 ? styles.orange : styles.white  } icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_rating > 4 ? styles.orange : styles.white  } icon={faStar}/>
            <Text style={styles.white}>({movie.no_of_ratings})</Text>
          </View>
            <Text style={styles.description}>{movie.description}</Text>
        </View>
    </SafeAreaView>
  );

};

Detail.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title'),
  headerStyle:{
    backgroundColor: 'orange'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c35',
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
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
  description:{
    padding: 10,
    fontSize: 20,
    color: 'white'
  },
  starContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  orange: {
    color: 'orange'
  },
  white: {
    color: 'white'
  }
});
