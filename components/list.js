import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, AsyncStorage } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MovieList(props) {

  const [ movies, setMovies ] = useState([]);
  let token = null;

  const getData = async () => {
    token = await AsyncStorage.getItem('MR_Token');
    if(token){
      getMovies();
    } else {
      props.navigation.navigate("Auth");
    }
  };

  useEffect(() => {
      getData();
  },[]);

  const getMovies = () => {
    console.log(token);
    fetch('http://10.0.2.2:8000/api/movies/', {
          method: 'GET',
          headers: {
             'Authorization': `Token ${token}`,
             'Content-Type': 'application/json'
          }
      }).then( res => res.json())
        .then( jsonRes => setMovies(jsonRes))
        .catch( error => console.log(error));
  }

  const movieClicked = (movie) => {
      props.navigation.navigate("Detail", {movie: movie, title: movie.title, token: token})
  }

  return (
    // <View style={styles.container}>
    <SafeAreaView style={{ flex: 1 }}>
        <View>
        <Image source={require('../assets/mobile-movieRater.png')} style={{width: '100%', height:135, paddingTop: 30}} resizeMode='contain' />
        <FlatList
            data={movies}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => movieClicked(item)}>
                  <View style={styles.item}>
                      <Text style={styles.itemText}>{item.title}</Text>
                  </View>   
                </TouchableOpacity>         
            )}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    </SafeAreaView>
  );
}

MovieList.navigationOptions = screenProps => ({
  title: "List of Movies",
  headerStyle:{
    backgroundColor: 'orange',
    // color: 'black'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center'
    // textAlign: 'center'
  },
  headerRight: (
       <Button title="Add" color="black" 
       onPress={() => screenProps.navigation.navigate("Edit", {movie: {Title: '', Description: '' }, title: "List of Movies"})} />
      
  )  
})

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

  }
});
