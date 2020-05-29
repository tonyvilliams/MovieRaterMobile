import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
// import MovieDetails from '../../movie-rater-web/src/components/movie-details';

export default function Auth(props) {

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const auth = () => {
        fetch(`http://10.0.2.2:8000/auth/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        }).then( res => res.json())
        .then( res => {
            console.log(res);
            // props.navigation.navigate("MovieList")
        })
        .catch( error => console.log(error));
        // props.navigation.goBack();
      
        } 

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
             <Text style={styles.label}>username</Text> 
             <TextInput 
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
                autoCapitalize={'none'}          
             />
             <Text style={styles.label}>password</Text> 
             <TextInput 
                style={styles.input}
                placeholder="password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
             />  
             <Button onPress={() => auth()} title="Login"/>      
        </View>
    </SafeAreaView>
  );
};

Auth.navigationOptions = screenProps => ({
  title: 'Login',
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center'
    // textAlign: 'center'
  }  
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
