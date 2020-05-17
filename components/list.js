import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function MovieList() {

  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
      fetch('http://10.0.2.2:8000/api/movies/', {
          method: 'GET',
          headers: {
             'Authorization': `Token f5da4e845178ff24b41d39188065699247835def`,
             'Content-Type': 'application/json'
          }
      }).then( res => res.json())
        .then( jsonRes => setMovies(jsonRes))
        .catch( error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item}) => (
            <Text key={item.id}>{item.title}</Text>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
