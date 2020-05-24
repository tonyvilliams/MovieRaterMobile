import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default function Edit(props) {

  const movie = props.navigation.getParam('movie', null);
  const [ title, setTitle ] = useState(movie.title);
  const [ description, setDescription] = useState(movie.description);

  const saveMovie = () => {
    props.navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
             <Text style={styles.label}>Title</Text> 
             <TextInput 
                style={styles.input}
                placeholder="Title"
                onChangeText={text => setTitle(text)}
                value={title}             
             />
             <Text style={styles.label}>Description</Text> 
             <TextInput 
                style={styles.input}
                placeholder="Description"
                onChangeText={text => setDescription(text)}
                value={description}
                multiline numberOfLines={4}             
             />  
             <Button onPress={() => saveMovie()} title="Save" />      
        </View>
    </SafeAreaView>
  );

};

Edit.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title'),
  
  headerStyle:{
    backgroundColor: 'orange'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center'
    // textAlign: 'center'
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c35',
    padding: 10,
  },
  
  description:{
    padding: 10,
    fontSize: 20,
    color: 'white'
  },

  label:{
    fontSize: 24,
    color: '#fff',
    padding: 10
  },

  input:{
    fontSize: 24,
    backgroundColor: '#fff',
    padding: 10
  }

});
